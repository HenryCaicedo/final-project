import React from "react";
import UnitContainer from "./UnitContainer";

function Content() {
  return (
    <div className="bg-bluen rounded-5 shadow-md p-5 max-w-full">
      <div className="flex flex-col gap-10">
        <UnitContainer title="Unidad 1" />
        <UnitContainer title="Unidad 2" />
      </div>
    </div>
  );
}
export default Content;
