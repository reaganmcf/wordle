import React from "react";

type TileProps = {
  content: string;
  state?: "present" | "absent" | "correct";
};

export default function Tile({ content, state = "present" }: TileProps) {
  const tileIsEmpty = content.trim().length === 0;
  return (
    <div
      className={`border ${
        tileIsEmpty ? "border-slate-400" : "border-slate-200"
      } mx-auto flex items-center justify-center w-full font-bold text-center text-slate-50 before:pb-full`}
      style={{
        fontSize: "2rem",
        lineHeight: "2rem",
        animationName: tileIsEmpty ? "" : "popIn",
        animationDuration: "100ms",
      }}
    >
      {content.toUpperCase()}
    </div>
  );
}
