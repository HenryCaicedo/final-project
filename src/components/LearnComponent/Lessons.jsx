// Lessons.jsx
import React from "react";
import { Link } from "react-router-dom";
import { setCurrentMap } from "../../game/GameScreen";

function Lesson({ number, clickable, map, allowed, unidad }) {
  const lessonClassName = `
    bg-zinc-200 w-[10vh] h-[10vh] rounded-3xl text-5xl flex justify-center items-center border-b-4 border-zinc-400 font-semibold
    ${allowed ? "text-gray-900 hover:bg-zinc-300" : "text-gray-500 cursor-not-allowed"}
  `;

  const handleButtonClick = () => {
    // Check if the button is clickable before calling setMap
    if (allowed) {
      localStorage.setItem("unidad",unidad);
      localStorage.setItem("nivel", number); // Por el momento
      setCurrentMap(map);

    }
  };

  return (
    <Link to={clickable}>
      <button
        className={lessonClassName}
        disabled={!allowed}
        onClick={handleButtonClick}
      >
        {number}
      </button>
    </Link>
  );
}

export default Lesson;