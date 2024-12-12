import React, { useState, useEffect } from "react";
import shuffle from "lodash.shuffle";
import "./memoryGame.css";
import { useNavigate } from "react-router-dom";

const pokemon = [
  {
    id: 4,
    name: "charizard",
    img: "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288868.jpg?size=626&ext=jpg&ga=GA1.2.550003581.1695189351&semt=ais",
  },
  {
    id: 10,
    name: "caterpie",
    img: "https://img.freepik.com/premium-photo/cheerful-pikachu-with-joyful-smile_985323-15307.jpg?size=626&ext=jpg&ga=GA1.2.550003581.1695189351&semt=ais",
  },
  {
    id: 77,
    name: "ponyta",
    img: "https://img.freepik.com/free-vector/hand-drawn-kitsune-illustration_23-2149387408.jpg?size=626&ext=jpg&ga=GA1.2.550003581.1695189351&semt=ais",
  },
  {
    id: 108,
    name: "lickitung",
    img: "https://img.freepik.com/free-photo/fantasy-enchanted-fairy-forest-magic-baby-dragon-generative-ai_157027-1747.jpg?size=626&ext=jpg&ga=GA1.2.550003581.1695189351&semt=ais",
  },
  {
    id: 132,
    name: "ditto",
    img: "https://img.freepik.com/premium-photo/cute-cat-head-portrait-cartoon-animation-3d-illustration-wallpaper-cute-cat-image_327903-1170195.jpg?size=626&ext=jpg&ga=GA1.2.550003581.1695189351&semt=ais",
  },
  {
    id: 133,
    name: "eevee",
    img: "https://img.freepik.com/free-vector/cute-shiba-inu-dog-wearing-dino-costume-cartoon-vector-icon-illustration-animal-holiday-isolated_138676-7108.jpg?size=626&ext=jpg&ga=GA1.2.550003581.1695189351&semt=ais",
  },
];

const doublePokemon = shuffle([...pokemon, ...pokemon]);

export default function MemoryGame() {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  function calculateScore(moves) {
    moves = Math.min(100, Math.max(0, moves));

    const maxMoves = 100;
    const minScore = 0;
    const maxScore = 10;

    const score =
      ((maxMoves - moves) / maxMoves) * (maxScore - minScore) + minScore;

    return score;
  }

  const handleFinish = () => {
    fetch("https://better-flannel-nightgown-bull.cyclic.app/api/addscore", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        testName: "memory",
        testScore: calculateScore(moves),
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

  useEffect(() => {
    if (opened.length < 2) return;

    const firstPokemon = doublePokemon[opened[0]];
    const secondPokemon = doublePokemon[opened[1]];

    if (firstPokemon.name === secondPokemon.name)
      setMatched((matched) => [...matched, firstPokemon.id]);
  }, [opened]);

  useEffect(() => {
    if (opened.length === 2) setTimeout(() => setOpened([]), 800);
  }, [opened]);

  useEffect(() => {
    if (matched.length === pokemon.length) {
      handleFinish();
      alert("you won!");
    }
  }, [matched]);

  function flipCard(index) {
    if (opened.includes(index)) return;

    setMoves((moves) => moves + 1);
    setOpened((opened) => [...opened, index]);
  }

  return (
    <div className="memoryGameContainer">
      <p className="moves">
        {moves} <strong>moves</strong>
      </p>

      <div className="cards">
        {doublePokemon.map((pokemon, index) => {
          let isFlipped = false;

          if (opened.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;

          return (
            <PokemonCard
              key={index}
              index={index}
              pokemon={pokemon}
              isFlipped={isFlipped}
              flipCard={flipCard}
            />
          );
        })}
      </div>
    </div>
  );
}

const PokemonCard = ({ index, pokemon, isFlipped, flipCard }) => {
  return (
    <button
      className={`pokemon-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => flipCard(index)}
    >
      <div className="inner">
        <div className="front">
          <img src={pokemon.img} alt={pokemon.name} width="100" />
        </div>
        <div className="back">?</div>
      </div>
    </button>
  );
};
