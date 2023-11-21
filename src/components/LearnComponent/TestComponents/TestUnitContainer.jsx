import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import TestLesson from "./TestLessons";
import Guide from "../../Tips";
const activitiesFolderPath = "../game"; // Replace with the actual path
import { Icon } from "@iconify/react";

function TestUnitContainer({
  title,
  color = "bg-purple-500",
  unidad,
  description,
  content,
  tipTitle,
  tipContent,
  imageSrc,
  tipImage,
}) {
  const jsFiles = getJSFilesInFolder(activitiesFolderPath);
  const [showTips, setShowTips] = useState(false);

  const toggleTips = () => {
    setShowTips(!showTips);
  };
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


  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex border shadow-md p-10 flex-col space-y-2 rounded-[45px] bg-zinc-50">
          <div className={`${color} rounded-3xl py-5 px-7 flex items-center space-x-4`}>
            <h2 className="text-white text-2xl font-semibold font-['Open Sans']">
              {title}
            </h2>
            <div>
              <Icon icon="flat-color-icons:idea" onClick={toggleTips} />
              <Guide
                visible={showTips}
                content={content}
                closeGuide={toggleTips}
                title={title}
                description={description}
                tipContent={tipContent}
                tipTitle={tipTitle}
                imageSrc={imageSrc}
                tipImage={tipImage}
              />
            </div>
          </div>

          <div />
          <div className="flex justify-center align-bottom space-x-4">
            <TestLesson unit={unidad} level={1} />
            <TestLesson unit={unidad} level={2} />
            <TestLesson unit={unidad} level={3} />
            <TestLesson unit={unidad} level={4} />
          </div>
          <div className="flex justify-center  align-bottom space-x-4">
            <TestLesson unit={unidad} level={5} />
            <TestLesson unit={unidad} level={6} />
            <TestLesson unit={unidad} level={7} />
            <TestLesson unit={unidad} level={8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestUnitContainer;
