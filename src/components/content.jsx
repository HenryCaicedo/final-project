import React from "react";
import UnitContainer from "./UnitContainer";

function Content() {
  return (
    <div className="p-[50px] h-full">

      <div className="bg-white px-10 h-full rounded-[48px] border-4 border-gray-300">



        {/* Título */}
        <div className="h-1/6  w-full flex flex-col justify-center border-b-4 border-gray-300">

          <div className="text-center text-3xl font-bold text-gray-400">Learn</div>

        </div>


        {/* Contenido */}
        <div className=" h-5/6  w-full overflow-y-auto">
          <div className="flex flex-col gap-5">
            <div/>
            <UnitContainer title="Unidad 1: Básicos" color="purple-400"/>
            <UnitContainer title="Unidad 2: Condicionales"/>
            <UnitContainer title="Unidad 3: Ciclos" color="purple-400" />
            <UnitContainer title="Unidad 4" />
            <UnitContainer title="Unidad 5" />
            <div/>
          </div>
        </div>


      </div>

    </div>

  );
}

export default Content;
