import React from "react";

const layout = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "u", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["ENTER", "z", "x", "c", "v", "b", "n", "m", "BACK"],
];

export default function Keyboard() {
  return (
    <div className="" style={{ height: 200 }}>
      {layout.map((row) => (
        <div></div>
      ))}
    </div>
  );
}

function Key(key: string) {
  return <button className="flex content-center items-center"></button>;
}
