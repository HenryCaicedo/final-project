import React from "react";

function TabContent({ title, children }) {
  return (
    <div className="py-[50px] px-[80px] h-full">
      <div className="bg-white px-10 h-full rounded-[48px] border-4 border-gray-300">
        {/* Título */}
        <div className="h-1/6 w-full flex flex-col justify-center border-b-4 border-gray-300">
          <div className="text-center text-3xl font-bold text-gray-400">{title}</div>
        </div>

        {/* Contenido */}
        <div className="h-5/6 w-full overflow-y-auto">
          <div className="flex flex-col gap-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
