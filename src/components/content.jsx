import React from "react";
import UnitContainer from "./UnitContainer";

function Content() {
  return (
    <div className="relative left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col gap-5">
        <UnitContainer title="Unidad 1" />
        <UnitContainer title="Unidad 2" />
        <UnitContainer title="Unidad 3" />
        <UnitContainer title="Unidad 4" />
      </div>
    </div>

  );
}
export default Content;
