import React, { useState, useContext, useEffect, useRef } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Trash2,
  Minus,
  Plus,
  ChevronsRight,
  CornerUpRight,
  CornerUpLeft,
  Eye,
  GripHorizontal,
} from "lucide-react";
import InstructionsContext, {
  InstructionsProvider,
} from "./InstructionsProvider";

const instructionDictionary = {
  forward: {
    translation: "Avanzar",
    icon: <ChevronsRight />,
    style: {background: "bg-pink-50", border: "border-pink-200" }
  },
  left: {
    translation: "Izquierda",
    icon: <CornerUpLeft />,
    style: {background: "bg-blue-50", border: "border-blue-200" }
  },
  right: {
    translation: "Derecha",
    icon: <CornerUpRight />,
    style: {background: "bg-green-50", border: "border-green-200" }
  },
  wait: {
    translation: "Observar",
    icon: <Eye />,
    style: {background: "bg-orange-50", border: "border-orange-200" }
  },
};
function findIndex({id}){
  const { getInstructionIndexById } = useContext(InstructionsContext);
  return getInstructionIndexById(id);
}
function ValueCounter({ value, instructionId, onMouseEnter, onMouseLeave }) {
  const style = "hover:bg-gray-300 rounded";
  const { updateInstructionValue } = useContext(InstructionsContext);

  const handleIncrement = () => {
    updateInstructionValue(instructionId, 1);
  };

  const handleDecrement = () => {
    updateInstructionValue(instructionId, -1);
  };

  return (
    <div
      className="flex w-fit items-center border-2 rounded-lg space-x-2 border-gray-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className={style} onClick={handleDecrement}>
        <Minus />
      </button>
      <h1 style={{ userSelect: "none" }}>{value}</h1>
      <button className={style} onClick={handleIncrement}>
        <Plus />
      </button>
    </div>
  );
}

function Instruction({ user: instruction }) {
  const buttonRef = useRef(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isParentHovered, setIsParentHovered] = useState(false);
  const {
    attributes: sortableAttributes,
    listeners: sortableListeners,
    setNodeRef: sortableSetNodeRef,
    transform,
    transition,
  } = useSortable({ id: instruction.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const translatedInstruction = instructionDictionary[instruction.type] || {
    translation: instruction.type,
    icon: null,
  };

  const bgColor = instructionDictionary[instruction.type].style.background;
  const borderColor = instructionDictionary[instruction.type].style.border;
  const translatedInstructionType = translatedInstruction.translation;
  const icon = translatedInstruction.icon;

  const { removeInstruction } = useContext(InstructionsContext);

  const handleTrashCanClick = (instructionId) => {
    removeInstruction(instructionId);
  };

  const handleMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  useEffect(() => {
    const changeInstruction = buttonRef.current;

    if (changeInstruction) {
      changeInstruction.addEventListener("mouseenter", handleMouseEnter);
      changeInstruction.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (changeInstruction) {
        changeInstruction.removeEventListener("mouseenter", handleMouseEnter);
        changeInstruction.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseEnter, handleMouseLeave]);

  const { setNodeRef, attributes, listeners } = isButtonHovered
    ? { setNodeRef: () => { }, attributes: {}, listeners: {} }
    : {
      setNodeRef: sortableSetNodeRef,
      attributes: sortableAttributes,
      listeners: sortableListeners,
    };


  const handleParentMouseEnter = () => {
    setIsParentHovered(true); // Update the state
  };

  const handleParentMouseLeave = () => {
    setIsParentHovered(false); // Update the state
  };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners} onMouseEnter={handleParentMouseEnter} onMouseLeave={handleParentMouseLeave}>
      <div
        className={
          `flex ${bgColor} ${borderColor} rounded-2xl py-2 px-5 h-[50px] font-semibold text-lg items-center border-[3px] overflow-hidden relative`
        }
      >
        {findIndex(instruction)+1}
        <div className="w-[10%]">
          {isParentHovered ? (
            <GripHorizontal />) : (icon)}
        </div>

        <div className="w-[55%] overflow-visible pl-3">

          {isParentHovered ?
            (
              instruction.type === "forward" ? (
                <ValueCounter
                  value={instruction.value}
                  instructionId={instruction.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ) : (
                <h1 className="flex-grow">{translatedInstructionType}</h1>
              )
            ) : (
              <h1 className="flex-grow">{translatedInstructionType} {instruction.value}</h1>
            )}



        </div>

        <div className="w-[20%] pr-2 bg-pink-200"></div>

        <div className="w-[15%] flex items-center justify-center">

          {isParentHovered && (
            <button
              className="hover:bg-red-300 rounded-lg p-1"
              onClick={() => handleTrashCanClick(instruction.id)}
              ref={buttonRef}
            >
              <Trash2 size={24} />
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default Instruction;
