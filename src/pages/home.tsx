import React from "react";
import Board from "../components/Board";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="bg-slate-800 w-screen">
      <div className="mx-auto" style={{ maxWidth: 500 }}>
        <Header />
        <div className="mt-32">
          <Board />
        </div>
      </div>
    </main>
  );
}
