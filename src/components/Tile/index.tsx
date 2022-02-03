import React from "react";

type TileProps = {
  content: string;
  state?: "present" | "absent" | "correct";
};

export default function Tile({ content, state = "present" }: TileProps) {
  return (
    <div
      className="border border-slate-400 mx-auto flex items-center justify-center w-full font-bold text-center text-slate-50 before:pb-full"
      style={{ fontSize: "2rem", lineHeight: "2rem" }}
    >
      {content.toUpperCase()}
    </div>
  );
}
