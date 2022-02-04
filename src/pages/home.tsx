import React, { useState } from "react";
import Alert from "../components/Alert";
import Board from "../components/Board";
import Header from "../components/Header";
import Keyboard, { KeyEvent, row1, row2, row3 } from "../components/Keyboard";
import words from "./../data/words";

export default function Home() {
  const [guesses, _setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("testing");

  const displayAlert = (text: string) => {
    setAlertText(text);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1200);
  };

  const handleKeyEvent = (e: KeyEvent) => {
    switch (e.type) {
      case "key":
        if (currentGuess.length < 5)
          setCurrentGuess(`${currentGuess}${e.value}`);
        break;
      case "backspace":
        setCurrentGuess(`${currentGuess.slice(0, -1)}`);
        break;
      case "enter":
        if (currentGuess.length !==5) {
          displayAlert("Not enough letters");
        } else if (!words.includes(currentGuess)) {
          displayAlert("Not in word list");
        }
        break;
    }
  };

  const handleRawKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleKeyEvent({
        type: "enter",
      });
    } else if (e.key === "Backspace") {
      handleKeyEvent({
        type: "backspace",
      });
    } else {
      let key = e.key.toLowerCase();
      // if key is not in valid keys, ignore it
      if (row1.includes(key) || row2.includes(key) || row3.includes(key))
        handleKeyEvent({
          type: "key",
          value: e.key,
        });
    }
  };

  return (
    <main
      tabIndex={0}
      className="m-0 bg-slate-800 absolute inset-0 outline-none overflow-y-hidden"
      onKeyDown={handleRawKeyPress}
    >
      <Alert show={showAlert} text={alertText} />
      <div
        className="flex flex-col h-screen w-screen mx-auto"
        style={{ maxWidth: 500 }}
      >
        <Header />
        <div className="grow mt-8 md:mt-20">
          <Board guesses={[...guesses, currentGuess]} />
        </div>

        <div className="pb-18 md:pb-0">
          <Keyboard onKeyboardEvent={handleKeyEvent} />
        </div>
      </div>
    </main>
  );
}
