import React from "react";
import { Link } from "react-router-dom";

function Lesson({ number }) {
  return (
    <Link to='/app'>
    <button className="
    bg-zinc-200 w-[10vh] h-[10vh] rounded-3xl text-5xl flex justify-center items-center border-b-4 border-zinc-400 font-semibold text-gray-900
    hover:bg-zinc-300
      active:border-b-0 active:h-[10vh]
    ">
      {number}
    </button>
    </Link>
    
  );
}

export default Lesson;
