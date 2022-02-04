import { abort } from "process";
import React from "react";

export const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
export const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
export const row3 = ["enter", "z", "x", "c", "v", "b", "n", "m", "back"];

type KeyboardProps = {
  onKeyboardEvent: (e: KeyEvent) => void;
};
export default function Keyboard({ onKeyboardEvent }: KeyboardProps) {
  return (
    <div className="px-2" style={{ height: 200 }}>
      <KeyRow eventCallback={onKeyboardEvent} key={1} keys={row1} />
      <KeyRow eventCallback={onKeyboardEvent} key={2} keys={row2} addSpacers />
      <KeyRow
        eventCallback={onKeyboardEvent}
        key={3}
        keys={row3}
        thickEndKeys
      />
    </div>
  );
}

type KeyRowProps = {
  keys: string[];
  eventCallback: (e: KeyEvent) => void;
  addSpacers?: boolean;
  thickEndKeys?: boolean;
};
function KeyRow({
  keys,
  eventCallback,
  addSpacers = false,
  thickEndKeys = false,
}: KeyRowProps) {
  return (
    <div className="flex mb-2">
      {addSpacers ? <div style={{ flex: 0.5 }}></div> : null}
      {keys.map((key, index) => (
        <Key
          key={key}
          char={key}
          onClick={eventCallback}
          thick={thickEndKeys && (index === 0 || index === keys.length - 1)}
        />
      ))}
      {addSpacers ? <div style={{ flex: 0.5 }}></div> : null}
    </div>
  );
}

export type KeyEvent = {
  type: "enter" | "backspace" | "key";
  value?: string;
};

type KeyProps = {
  char: string;
  onClick: (e: KeyEvent) => void;
  thick?: boolean;
};
function Key({ char, onClick, thick = false }: KeyProps) {
  const handleClick = () => {
    if (char === "enter") {
      onClick({
        type: "enter",
      });
    } else if (char === "back") {
      onClick({
        type: "backspace",
      });
    } else {
      onClick({
        type: "key",
        value: char,
      });
    }
  };

  return (
    <button
      className="flex-1 flex items-center font-bold ml-1 h-14 cursor-pointer select-none bg-slate-400 text-slate-50 rounded-sm"
      style={{ flex: `${thick ? 1.5 : 1.0}` }}
      onClick={handleClick}
    >
      <div className="w-full text-sm">{char.toUpperCase()}</div>
    </button>
  );
}
