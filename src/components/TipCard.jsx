import React from "react";
const TipCard = ({ tipTitle, tipContent, tipImage }) => {
  return (
    <div className="bg-blue-200 p-8 text-center rounded-lg shadow-lg">
      <p className="text-blue-500 font-bold">{tipTitle}</p>
      <p className="text-lg mb-4">{tipContent}</p>
      <img src={tipImage} alt="Illustration" className="mx-auto mb-4" />
    </div>
  );
};

export default TipCard;
