import React, { useState } from "react";
import './App.css'
const questions = [
  {
    question:
      "As you enter the Enchanted Forest, you come across two paths. One path is bright and sunny, while the other is dark and shadowy. Which path do you choose?",
    options: [
      {
        text: "The bright and sunny path! It looks cheerful and fun.",
        score: 0,
      },
      {
        text: "The dark and shadowy path. I feel a little scared, but I want to be brave.",
        score: 10,
      },
      {
        text: "I want to explore both paths! Maybe I can find something special.",
        score: 5,
      },
    ],
  },
  {
    question:
      "You meet a friendly squirrel who offers you a snack. He asks if you want to share your favorite food with him. How do you feel about sharing?",
    options: [
      {
        text: "I love sharing! It makes me happy to see others enjoy my favorite food.",
        score: 0,
      },
      {
        text: "I feel a bit nervous about sharing. What if he doesn’t like it?",
        score: 10,
      },
      {
        text: "I’m not sure. I like my food, but I also want to be nice.",
        score: 5,
      },
    ],
  },
  {
    question:
      "You arrive at a beautiful river where the water sings a lovely song. The river invites you to sing along. What do you do?",
    options: [
      { text: "I sing along loudly! I love to sing and have fun.", score: 0 },
      {
        text: "I just listen quietly. I’m a little shy about singing in front of others.",
        score: 10,
      },
      {
        text: "I might sing a little bit, but not too loud. I want to enjoy the music.",
        score: 5,
      },
    ],
  },
  {
    question:
      "Suddenly, the sky gets cloudy, and it starts to drizzle. You see a cozy cave nearby. What do you choose to do?",
    options: [
      { text: "I run to the cave to stay dry and play inside!", score: 0 },
      {
        text: "I feel worried about the rain and want to go home instead.",
        score: 10,
      },
      {
        text: "I’ll wait a little to see if the rain stops before deciding.",
        score: 5,
      },
    ],
  },
  {
    question:
      "You meet a wise old owl who asks how you feel about making new friends. What do you say?",
    options: [
      {
        text: "I love making new friends! It’s exciting to meet new people.",
        score: 0,
      },
      {
        text: "I feel a bit anxious about it. What if they don’t like me?",
        score: 10,
      },
      {
        text: "I’m okay with making friends, but I prefer to take my time.",
        score: 5,
      },
    ],
  },
  {
    question:
      "Finally, you find the Magical Crystal! But to unlock its magic, you need to tell the forest creatures how you feel. What do you say?",
    options: [
      { text: "I feel happy and excited to be here!", score: 0 },
      {
        text: "I feel a little worried and unsure about everything.",
        score: 10,
      },
      {
        text: "I have mixed feelings. Sometimes I’m happy, but sometimes I’m nervous.",
        score: 5,
      },
    ],
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionClick = (score) => {
    setTotalScore(totalScore + score);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(
        `${
          totalScore >= 50
          ? ` the total score is : ${totalScore} The child might have anxiety.`
          : ` the total score is : ${totalScore}  The child does not show signs of anxiety.`
        }`
      );
    }
  };

  return (
    <div className="App h-screen  text-center font-sans py-8">
     
      <div className="bg-green-100 p-8 rounded-lg shadow-md w-[50%]   mt-[10%]  ml-[25%]">
      <h1 className="text-green-700 text-4xl mb-4">
        Adventure in the Enchanted Forest
      </h1>
        {currentQuestion < questions.length ? (
          <div>
            <h2 className="text-green-800 text-2xl mb-4">
              {questions[currentQuestion].question}
            </h2>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded m-2 transition duration-300"
                  onClick={() => handleOptionClick(option.score)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-green-800 text-2xl mb-4">
              Thank you for your adventure!
            </h2>
         
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
