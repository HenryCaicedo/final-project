import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Lesson from "./Lessons";
const activitiesFolderPath = "../game"; // Replace with the actual path

function UnitContainer({ title, color='purple-500'}) {
  const jsFiles = getJSFilesInFolder(activitiesFolderPath);

  function getJSFilesInFolder(folderPath) {
    // .
    // Queda pendiente discutir si es mejsor esto en progreso o en la pantalla que carga.
    //
    return ["Driving.jsx", "activity1.js"];
  }

  const renderActivity = (activityName) => {
    const ActivityComponent = lazy(() =>
      import(/* @vite-ignore */ `../game/${activityName}`)
    );
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ActivityComponent />
      </Suspense>
    );
  };


  var str = "bg-sky-500 rounded-3xl py-5 px-7";
  console.log(str);

  return (

    <div>

      <div className="flex items-center justify-center">

        <div className="flex border shadow-md p-10 flex-col space-y-2 rounded-[45px] bg-zinc-50">
          <div className={str}>
            <h2 className="text-white text-2xl font-semibold font-['Open Sans']">
              {title}
            </h2>
          </div>

          <div />
          <div className="flex justify-center align-bottom space-x-4">
            <Lesson number={1} />
            <Lesson number={2} />
            <Lesson number={3} />
            <Lesson number={4} />
          </div>
          <div className="flex justify-center  align-bottom space-x-4">
            <Lesson number={5} />
            <Lesson number={6} />
            <Lesson number={7} />
            <Lesson number={8} />
          </div>
          
        </div>
      </div>
    </div>


  )
}

export default UnitContainer;
