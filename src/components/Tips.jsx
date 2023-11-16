import React from "react";
import { Icon } from "@iconify/react";
import ImageWithTitle from "./LearnComponent/ImageWithTitle";
import TipCard from "./TipCard";

function Guide({
  visible,
  content,
  closeGuide,
  title,
  description,
  tipTitle,
  tipContent,
  imageSrc,
  tipImage,
  videoId,
}) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black text-black l space-y-4 bg-opacity-60  flex items-center justify-center">
      <div className="bg-white p-2 w-1/3 rounded-3xl max-h-[90vh] overflow-y-auto">
        {" "}
        {/* Para modificar el tamaño del modal, modificar el max-h. */}
        <div className="space-y-1">
          <div className="h-1/6 w-full flex flex-col text-3xl justify-center border-b-2 border-gray-200 pb-[2vh] pt-5">
            <div className="border-b-2 border-gray-200">
              <button className="close-button" onClick={closeGuide}>
                <Icon icon="flat-color-icons:left" />
              </button>
            </div>
            <ImageWithTitle
              title={title}
              imageSrc={imageSrc}
              description={description}
            />
          </div>

          <div className="flex flex-col">{content}</div>
          <TipCard
            tipTitle={tipTitle}
            tipContent={tipContent}
            tipImage={tipImage}
            videoId={videoId}
          />
        </div>
      </div>
    </div>
  );
}

export default Guide;
