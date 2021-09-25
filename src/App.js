import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🥳": "Partying Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "❤️": "love",
  "🤩": "Star-Struck",
  "😂": "Face with Tears of Joy",
  "🙃" : "Upside-Down Face",
  "😉" : "Winking Face" ,
  "😆" : "Grinning Squinting Face" ,
  "😅" : "Grinning Face with Sweat" ,
  "😎" : "Smiling Face with Sunglasses"


};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); 
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (

    <div className="App">
      <h1>Enter Emoji Inside box or Click Emoji</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> 
      <h3> {meaning} </h3> 
      {
     
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
