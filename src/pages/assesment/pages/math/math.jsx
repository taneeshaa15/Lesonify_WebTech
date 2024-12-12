import React, { useState, useEffect } from "react";
import "./math.css";
import { useNavigate } from "react-router-dom";

const Maths = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(6);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [userResult, setUserResult] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timer, setTimer] = useState(20);
  const [questionCount, setQuestionCount] = useState(0);
  const [totalQuestions] = useState(10);
  const [gameEnded, setGameEnded] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));

  const handleFinish = () => {
    fetch("https://better-flannel-nightgown-bull.cyclic.app/api/addscore", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        testName: "problemSolving",
        testScore: correct,
        testUser: user._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          navigate("/assesment");
        }, 500);
      })
      .catch((err) => console.log(err));
  };

  const generateProblem = () => {
    if (questionCount >= 10) {
      handleFinish();
      return;
    }

    const maxNumber = Math.min(age * 3, 100);

    const randomNum1 = Math.floor(Math.random() * maxNumber);
    const randomNum2 = Math.floor(Math.random() * maxNumber);

    const operators = ["+", "-", "*", "/"];
    const randomOperator =
      operators[Math.floor(Math.random() * operators.length)];

    setNum1(randomNum1);
    setNum2(randomNum2);
    setOperator(randomOperator);
    setUserResult("");
    setIsIncorrect(false);
    setCorrectAnswer(null);
    setQuestionCount(questionCount + 1);
    startTimer();
  };

  const startTimer = () => {
    setIsTimerActive(true);
    setTimer(30);
  };

  useEffect(() => {
    if (!gameEnded) {
      generateProblem();
    }
  }, []);

  useEffect(() => {
    let countdown;

    if (isTimerActive && timer > 0) {
      countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (isTimerActive && timer === 0) {
      setIsIncorrect(true);
      setCorrectAnswer(num1 + num2);
      generateProblem();
    }

    return () => {
      clearInterval(countdown);
    };
  }, [isTimerActive, timer, num1, num2, generateProblem]);

  const handleSubmit = () => {
    if (gameEnded) {
      return;
    }

    if (userResult.trim() === "") {
      setIsIncorrect(true);
      setCorrectAnswer(num1 + num2);
      generateProblem();
      return;
    }

    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = num1 + num2;
        break;
      case "-":
        calculatedResult = num1 - num2;
        break;
      case "*":
        calculatedResult = num1 * num2;
        break;
      case "/":
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = 0;
        break;
    }

    const isCorrect = parseInt(userResult, 10) === calculatedResult;

    if (!isCorrect) {
      setIsIncorrect(true);
      setCorrectAnswer(calculatedResult);
      setIncorrect(incorrect + 1);
    } else {
      setCorrect(correct + 1);
    }

    if (questionCount + 1 < totalQuestions) {
      generateProblem();
    } else {
      handleFinish();
      setGameEnded(true);
      setIsTimerActive(false);
    }
  };

  const resetGame = () => {
    setGameEnded(false);
    setCorrect(0);
    setIncorrect(0);
    setQuestionCount(0);
    generateProblem();
  };

  return (
    <div className="mathdiv">
      <div className="mathContainer">
        <div className="mathheader">
          <h1 className="title">Problem Solving</h1>
        </div>
        {!gameEnded ? (
          <div className="contentDiv">
            <div className="equation">
              {num1} {operator} {num2} =
            </div>
            <input
              className="input-field"
              placeholder="Your Answer"
              value={userResult}
              onChange={(e) => setUserResult(e.target.value)}
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
            {isIncorrect && (
              <div className="incorrect-answer">
                Incorrect. The correct answer is{" "}
                <span className="correct-answer">{correctAnswer}</span>.
              </div>
            )}
            <div className="timer">Time Remaining: {timer} seconds</div>
            <div className="correct-count">Correct Answers: {correct}</div>
            <div className="question-count">
              Question {questionCount + 1} of {totalQuestions}
            </div>
            {questionCount + 1 < totalQuestions && (
              <button className="generate-button" onClick={generateProblem}>
                Next Question
              </button>
            )}
            {gameEnded && (
              <div className="results-container">
                <div className="results-text">
                  Game Over!
                  <br />
                  Correct Answers: {correct}
                  <br />
                  Incorrect Answers: {incorrect}
                </div>
                <button className="results-button" onClick={resetGame}>
                  Play Again
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mathscoreDiv">
            <p className="mathscorePara">Your total score is : {correct}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Maths;
