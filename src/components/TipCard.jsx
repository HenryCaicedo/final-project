import React from "react";
import YoutubeEmbed from "./Video";
const TipCard = ({ tipTitle, tipContent, tipImage, videoId }) => {
  return (
    <div className="bg-blue-200 p-8 text-center rounded-lg shadow-lg">
      <p className="text-blue-500 font-bold">{tipTitle}</p>
      <p className="text-lg mb-4">{tipContent}</p>
      <img src={tipImage} alt="Illustration" className="mx-auto mb-4" />{" "}
      {/* <div className=" justify-center">
        <YoutubeEmbed embedId={videoId} />
      </div> */}
    </div>
  );
};

export default TipCard;
