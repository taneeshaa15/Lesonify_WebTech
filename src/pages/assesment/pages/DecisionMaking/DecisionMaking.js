import React, { useEffect, useState } from "react";
import "./DecisionMaking.css";
import { useNavigate } from "react-router-dom";

const dataByAgeGroup = {
  "0-4": [
    "apple",
    "ball",
    "cat",
    "dog",
    "fish",
    "duck",
    "hat",
    "sun",
    "moon",
    "star",
  ],
  "4-10": [
    "computer",
    "television",
    "keyboard",
    "guitar",
    "elephant",
    "dinosaur",
    "bicycle",
    "robot",
    "carrot",
    "giraffe",
  ],
  "10-16": [
    "chemistry",
    "astronomy",
    "biology",
    "algebra",
    "history",
    "literature",
    "geometry",
    "physics",
    "geography",
    "language",
  ],
  "16-24": [
    "university",
    "entrepreneur",
    "innovation",
    "technology",
    "leadership",
    "revolution",
    "programming",
    "disruption",
    "startup",
    "blockchain",
  ],
};

const WordGame = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  let timer;

  const handleFinish = () => {
    fetch("https://better-flannel-nightgown-bull.cyclic.app/api/addscore", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        testName: "decisionMaking",
        testScore: score,
        testUser: user._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          navigate("/assesment");
        }, 500);
      })
      .catch((err) => console.log(err));
  };

  const chooseRandom = () => {
    if (round >= 6) {
      setGameOver(true);
      setTotalScore(score);
      clearInterval(timer);
      handleFinish();
      return;
    }

    setChosenLetters([]);
    setSelectedLetters([]);
    setIsNextButtonEnabled(false);

    const ageGroup = determineAgeGroup();
    const words = dataByAgeGroup[ageGroup];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setWord(randomWord);
    shuffleWord(randomWord);
    setTimeRemaining(60);
  };

  const determineAgeGroup = () => {
    return "0-4";
  };

  const shuffleWord = (word) => {
    const array = [];
    let charArray = word.split("");

    while (charArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * charArray.length);
      array.push({ letter: charArray[randomIndex], isClicked: false });
      charArray.splice(randomIndex, 1);
    }

    setSelectedLetters(array);
  };

  const onLetterClick = (index) => {
    if (timeRemaining <= 1) {
      return;
    }

    const clickedLetter = selectedLetters[index];
    const updatedLetters = [...selectedLetters];
    updatedLetters[index].isClicked = !clickedLetter.isClicked;

    setSelectedLetters(updatedLetters);

    const letter = clickedLetter.letter;
    if (clickedLetter.isClicked) {
      setChosenLetters([...chosenLetters, letter]);
    } else {
      setChosenLetters(
        chosenLetters.filter((chosenLetter) => chosenLetter !== letter)
      );
    }

    if (chosenLetters.join("") + letter === word) {
      setIsNextButtonEnabled(true);
    } else {
      setIsNextButtonEnabled(false);
    }
  };

  useEffect(() => {
    setChosenLetters([]);
    setSelectedLetters([]);
  }, [round]);

  const handleNextRound = () => {
    setRound(round + 1);
    setScore(score + 1);
  };

  useEffect(() => {
    if (!gameOver) {
      timer = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining((prevTime) => prevTime - 1);
        } else {
          setRound(round + 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining, round, gameOver]);

  useEffect(() => {
    chooseRandom();
  }, [round]);

  return (
    <div className="wordGameContainer">
      <div className="wordDiv">
        {!gameOver ? (
          <>
            <h1>Word Game</h1>
            <h3 className="word">Word:{word}</h3>
            <div className="game-info">
              <div>Time Remaining: {timeRemaining} seconds</div>
              <div>Round: {round} / 5</div>
              <div>Score: {score}</div>
            </div>
            <div className="letter-container">
              {selectedLetters &&
                selectedLetters.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => onLetterClick(index)}
                    className={`letterBox ${item.isClicked ? "clicked" : ""}`}
                  >
                    {item.letter}
                  </div>
                ))}
            </div>
            <div className="chosen-letters">
              Chosen Letters: {chosenLetters.join("")}
            </div>

            <button
              className="next-button"
              onClick={handleNextRound}
              disabled={!isNextButtonEnabled}
            >
              Next
            </button>
          </>
        ) : (
          <div className="scroeDiv">
            <p className="scorePara">Your total score is : {totalScore}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordGame;
