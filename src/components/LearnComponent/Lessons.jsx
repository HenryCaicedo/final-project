import React from "react";
import { Link } from "react-router-dom";

function Lesson({ number, clickable }) {
  const lessonClassName = `
    bg-zinc-200 w-[10vh] h-[10vh] rounded-3xl text-5xl flex justify-center items-center border-b-4 border-zinc-400 font-semibold
    ${
      true
        ? "text-gray-900 hover:bg-zinc-300"
        : "text-gray-500 cursor-not-allowed"
    }
  `;

  return (
    <Link to={clickable}>
      <button
        className={lessonClassName}
        disabled={!clickable}
        style={true ? {} : { pointerEvents: "none" }}
      >
        {number}
      </button>
    </Link>
  );
}

export default Lesson;
