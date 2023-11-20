import React from "react";
import { Link } from "react-router-dom";
import { currentProgress } from "./currentProgress";
import { setCurrentMap } from "../../../game/GameScreen";
import { setMap } from "../../../game/currentMap";

import mapListU1 from "../../../game/maps/unit1";
import mapListU2 from "../../../game/maps/unit2";

function TestLesson({ unit=1, level }) {

  let map;

  if(unit===1){
    switch(level){
      default: 
        map = mapListU1.map01;
        break;
      case 2: 
        map = mapListU1.map02;
        break;
      case 3:
        map = mapListU1.map03;
        break;
      case 4:
        map = mapListU1.map04;
        break;
      case 5:
        map = mapListU1.map05;
        break;
      case 6:
        map = mapListU1.map06;
        break;
      case 7:
        map = mapListU1.map07;
        break;
      case 8:
        map = mapListU1.map08;
        break;
    }    
  }else if(unit===2){
    switch(level){
      default: 
        map = mapListU2.map01;
        break;
      case 2: 
        map = mapListU2.map02;
        break;
      case 3:
        map = mapListU2.map03;
        break;
      case 4:
        map = mapListU2.map04;
        break;
      case 5:
        map = mapListU2.map05;
        break;
      case 6:
        map = mapListU2.map06;
        break;
      case 7:
        map = mapListU2.map07;
        break;
      case 8:
        map = mapListU2.map08;
        break;
    }
  }

  let isButtonDisabled = true;

  let style = "bg-zinc-200 border-zinc-400 text-gray-400"

  if(currentProgress.unit >= unit){

    if( currentProgress.level >= level || currentProgress.unit>unit){
      isButtonDisabled = false;
      if(currentProgress.level == level && currentProgress.unit == unit){
        style = "bg-yellow-400 border-yellow-500 text-black hover:bg-yellow-300 active:border-b-0 active:h-[10vh]"
      }else{

        style = "bg-sky-400 border-sky-500 text-white hover:bg-sky-300 active:border-b-0 active:h-[10vh]"
      }
    }
  }

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setMap(map);  
      setCurrentMap(map);
    }
  };


  return (
    <Link to="/app">
      <button
        className={`${style}
          w-[10vh] h-[10vh] rounded-3xl text-5xl flex justify-center items-center border-b-4 font-semibold`}
        disabled={isButtonDisabled}
        onClick={handleButtonClick}
      >
        {level}
      </button>
    </Link>
  );
}


export default TestLesson;
