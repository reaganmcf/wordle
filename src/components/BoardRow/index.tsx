import React from "react";
import Tile from "../Tile";

type BoardRowProps = {
  guess: string;
};

export default function BoardRow({ guess }: BoardRowProps) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {[0, 1, 2, 3, 4].map((characterIndex) => {
        const cellContent = guess ? guess[characterIndex] : "";

        return <Tile content={cellContent} />;
      })}
    </div>
  );
}
