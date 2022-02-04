import React from "react";

type AlertProps = {
  text: string;
  show: boolean;
};
export default function Alert({ text, show }: AlertProps) {
  return (
    <div
      className="absolute top-32 drop-shadow bg-slate-100 text-slate-900 rounded-md py-4 px-8 left-1/2 transform -translate-x-1/2 transition-all ease-in-out duration-300"
      style={{ opacity: show ? 1 : 0 }}
    >
      {text}
    </div>
  );
}
