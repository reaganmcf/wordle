import React from "react";
import BoardRow from "../BoardRow";

interface GameGridProps {}
export default function Board(props: GameGridProps) {
  const guesses = ["apple", "berry"];
  const rows = [0, 1, 2, 3, 4, 5].map((guessIndex) => {
    const currWord =
      guessIndex < guesses.length ? guesses[guessIndex] : "     ";
    return <BoardRow guess={currWord} />;
  });

  return (
    <div
      className="grid grid-rows-6 gap-1 mx-auto"
      style={{ width: 350, height: 420 }}
    >
      {rows}
    </div>
  );
}
