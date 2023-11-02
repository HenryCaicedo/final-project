import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Lesson from "./Lessons";
const activitiesFolderPath = "../game"; // Replace with the actual path

function UnitContainer({ title }) {
  const jsFiles = getJSFilesInFolder(activitiesFolderPath);

  function getJSFilesInFolder(folderPath) {
    // .
    // Queda pendiente discutir si es mejor esto en progreso o en la pantalla que carga.
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


  /*
  return (
    <div className="UnitContainer flex space-y-[15vh] pt-[5vh] relative left-[70vh] w-[100vh] h-full bg-yellown p-5 m-5 shadow rounded-xl flex flex-col overflow-hidden">
      <h2 className="text-bluen text-6xl font-bold font-['Open Sans'] drop-shadow">
        {title}
      </h2>
      <div className="ButtonRow space-x-4 space">
        <Link to={`/app`}>
          <div className="space-y-4 relative left-[7vh] top-[-7vh]">
            <div className="flex space-x-4 relative left-[9vh]">
              <Lesson number={1} />
              <Lesson number={2} />
              <Lesson number={3} />
              <Lesson number={4} />
            </div>
            <div className="flex space-x-4  relative left-[9vh]">
              <Lesson number={5} />
              <Lesson number={6} />
              <Lesson number={7} />
              <Lesson number={8} />
            </div>
          </div>
        </Link>
      </div>
    </div>

    
  );
  */

  return (

    <div>

      <div class="flex items-center justify-center">

        <div class="flex border shadow-lg p-10 flex-col space-y-4 rounded-3xl bg-slate-50">
          <h2 className="text-bluen text-4xl font-bold font-['Open Sans'] drop-shadow">
            {title}
          </h2>
          <div/>
          <div className="flex justify-center space-x-4">
            <Lesson number={1} />
            <Lesson number={2} />
            <Lesson number={3} />
            <Lesson number={4} />
          </div>
          <div className="flex justify-center space-x-4">
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
