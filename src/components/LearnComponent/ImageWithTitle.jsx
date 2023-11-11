// ImageWithTitle.js
import React from "react";

const ImageWithTitle = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={imageSrc}
        alt="Illustration"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ImageWithTitle;
