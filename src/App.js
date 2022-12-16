import React from "react";
import "./styles.css";

var emojiVar = "Emoji Predictor";
var color = "violet";
var userInput = "Shruti";
var likeCounter = 0;
function likeButton() {
  console.log("Clicked");
  likeCounter = likeCounter + 1;
  console.log(likeCounter);
}
export default function App() {
  return (
    <div className="App">
      <h1>{emojiVar}</h1>
      <h3 style={{ backgroundColor: color }}>welcome {userInput}</h3>
      <h2>
        welcome<span style={{ color: color }}> {userInput}</span>
      </h2>
      .<button onClick={likeButton}>Like</button>
      {/* This is use for console*/}
    </div>
  );
}
