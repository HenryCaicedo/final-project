import React from "react";
import { Link } from "react-router-dom";
import { currentProgress } from "./currentProgress";

function TestLesson({ unit=1, level }) {

  let isButtonDisabled = true;

  let style = "bg-zinc-200 border-zinc-400 text-gray-400"

  if(currentProgress.unit >= unit){

    

    if( currentProgress.level >= level || currentProgress.unit>unit){
      isButtonDisabled = false;
      style = "bg-blue-400 border-blue-500 text-white hover:bg-blue-300 active:border-b-0 active:h-[10vh]"
    }
  }


  return (
    <Link to="/app">
      <button
        className={`${style}
          w-[10vh] h-[10vh] rounded-3xl text-5xl flex justify-center items-center border-b-4 font-semibold`}
        
        disabled={isButtonDisabled}
      >
        {level}
      </button>
    </Link>
  );
}


export default TestLesson;
