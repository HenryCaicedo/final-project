import React, { useState, useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2, Minus, Plus, ChevronsRight, CornerUpRight, CornerUpLeft, Eye, GripHorizontal } from "lucide-react";
import InstructionsContext, { InstructionsProvider } from "./InstructionsProvider";

function ValueCounter({value}) {
  const style = 'hover:bg-gray-300 rounded'
  return (
    <div className="flex w-fit items-center border-2 rounded-lg space-x-2">
      <button className={style}>
        <Minus />
      </button>
      <h1>{value}</h1>
      <button className={style}>
        <Plus />
      </button>
    </div>
  )
}

function Trashcan() {
  const { removeInstruction } = useContext(InstructionsContext);
  
  return (
    <button onClick={() => removeInstruction()}>
      Holi
    </button>
  );
}



function Instruction({ user: instruction }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: instruction.id });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const instructionDictionary = {
    forward: {
      translation: 'Avanzar',
      icon: <ChevronsRight />,
    },
    right: {
      translation: 'Derecha',
      icon: <CornerUpRight />,
    },
    left: {
      translation: 'Izquierda',
      icon: <CornerUpLeft />,
    },
    wait: {
      translation: 'Observar',
      icon: <Eye />,
    },
  };

  const translatedInstruction = instructionDictionary[instruction.type] || { translation: instruction.type, icon: null };

  const translatedInstructionType = translatedInstruction.translation;
  const icon = translatedInstruction.icon;


 

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >

      <Trashcan/>
      
      <div id='main' className={"flex bg-white rounded-2xl py-2 px-5 h-[50px] font-semibold text-lg items-center border-[3px] hover:bg-gray-100 hover:border-gray-200 overflow-hidden relative"}>

        
        <div className="w-[10%]">
          {isHovered ? (
            <GripHorizontal />) : (icon)}
        </div>

        <div className="w-[55%] overflow-visible pl-3">
          {isHovered ? (
            instruction.type === 'forward' ? (
              <ValueCounter value={instruction.value} />
            ) : (
              <h1 className="flex-grow">{translatedInstructionType}</h1>
            )
          ) : (
            <h1 className="flex-grow">{translatedInstructionType} {instruction.value}</h1>
          )}
      </div>

      <div className="w-[20%] pr-2 bg-pink-200">

      </div>

      <div className="w-[15%] flex items-center justify-center">
        {isHovered && (
          <button className="hover:bg-red-300 rounded-lg p-1"
          >
            <Trash2 size={24} />
          </button>
        )}
      </div>

    </div>

    </div >
  );

}

export default Instruction;
