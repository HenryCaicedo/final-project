import React from "react";
import { Icon } from "@iconify/react";
function Guide({ visible, content, closeGuide }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black text-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <button className="close-button" onClick={closeGuide}>
          <Icon icon="flat-color-icons:left" />
        </button>
        <div className="flex flex-col">{content}</div>
      </div>
    </div>
  );
}

export default Guide;
