import React, { useState, lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import Lesson from "./Lessons";
import Guide from "../Tips";
const activitiesFolderPath = "../game"; // Replace with the actual path
import Axios from "axios";
import { Icon } from "@iconify/react";

function UnitContainer({
  title,
  color = "purple-500",
  description,
  content,
  tipTitle,
  tipContent,
  imageSrc,
  tipImage,
  videoId,
}) {
  const jsFiles = getJSFilesInFolder(activitiesFolderPath);
  const [showTips, setShowTips] = useState(false);

  const toggleTips = () => {
    setShowTips(!showTips);
  };
  const [allowedLessons, setAllowedLessons] = useState([]);
  const id = localStorage.getItem("id");
  function getJSFilesInFolder(folderPath) {
    // .
    // Queda pendiente discutir si es mejsor esto en progreso o en la pantalla que carga.
    //
    return ["Driving.jsx", "activity1.js"];
  }
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const response = await Axios.get(
          `https://api-coderacers.onrender.com/progreso/${id}`
        );

        const data = response.data;
        const ultimoMapa = data.ultimoMapa;
        console.log(data);
        console.log(ultimoMapa);
        // Assuming 'ultimoMapa' has a property 'nivel'
        const ultimoMapaNivel = ultimoMapa ? ultimoMapa.nivel : 0;

        // Generate an array of allowed lessons up to 'ultimoMapaNivel + 1'
        const allowedLessonsArray = Array.from(
          { length: ultimoMapaNivel + 1 },
          (_, index) => index + 1
        );

        setAllowedLessons(allowedLessonsArray);

        console.log("Allowed Lessons:", allowedLessonsArray);
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    fetchUserProgress();
  }, [id]);
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

  var str = "bg-sky-500 rounded-3xl py-5 px-7 flex";
  console.log(str);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex border shadow-md p-10 flex-col space-y-2 rounded-[45px] bg-zinc-50">
          <div className={str}>
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
                videoId={videoId}
              />
            </div>
          </div>

          <div />
          <div className="flex justify-center align-bottom space-x-4">
            
              <Lesson
                number={1}
                clickable={"/app"}
              />
                          <Lesson
                number={2}
                clickable={"/level2"}
                
              />
                            <Lesson
                number={3}
                clickable={"/level3"}
              />
                            <Lesson
                number={4}
                clickable={"/level4"}
              />
              </div>
                      <div className="flex justify-center align-bottom space-x-4">
                      <Lesson
                number={5}
                clickable={"/level1"}
                
              />
                            <Lesson
                number={6}
                clickable={"/level3"}
              />
                            <Lesson
                number={7}
                clickable={"/app"}
              />
                          <Lesson
                number={8}
                clickable={"/level1"}
                
              />
                      </div>
</div>
          </div>

        </div>
    
    
  );
}

export default UnitContainer;
