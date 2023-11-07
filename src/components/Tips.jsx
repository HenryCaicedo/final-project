import React from "react";
import { Icon } from "@iconify/react";
function Guide({ visible, content, closeGuide, title }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black text-black rounded-2xl space-y-4 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 w-1/3 rounded-2xl">
        <div className="space-y-1">
          <div className="h-1/6 w-full flex flex-col text-3xl justify-center border-b-2 border-gray-200 pb-[2vh] pt-5">
            <div className="">
              <button className="close-button" onClick={closeGuide}>
                <Icon icon="flat-color-icons:left" />
              </button>
            </div>

            {title}
          </div>

          <div className="flex flex-col">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
