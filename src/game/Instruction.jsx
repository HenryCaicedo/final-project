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
  },
  right: {
    translation: "Derecha",
    icon: <CornerUpRight />,
  },
  left: {
    translation: "Izquierda",
    icon: <CornerUpLeft />,
  },
  wait: {
    translation: "Observar",
    icon: <Eye />,
  },
};

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
      className="flex w-fit items-center border-2 rounded-lg space-x-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className={style} onClick={handleDecrement}>
        <Minus />
      </button>
      <h1>{value}</h1>
      <button className={style} onClick={handleIncrement}>
        <Plus />
      </button>
    </div>
  );
}

function Instruction({ user: instruction }) {
  const buttonRef = useRef(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
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
    ? { setNodeRef: () => {}, attributes: {}, listeners: {} }
    : {
        setNodeRef: sortableSetNodeRef,
        attributes: sortableAttributes,
        listeners: sortableListeners,
      };

  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div
        className={
          "flex bg-white rounded-2xl py-2 px-5 h-[50px] font-semibold text-lg items-center border-[3px] hover:bg-gray-100 hover:border-gray-200 overflow-hidden relative"
        }
      >
        <div className="w-[10%]">{icon}</div>

        <div className="w-[55%] overflow-visible pl-3">
          {instruction.type === "forward" ? (
            <ValueCounter
              value={instruction.value}
              instructionId={instruction.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ) : (
            <h1 className="flex-grow">{translatedInstructionType}</h1>
          )}
        </div>

        <div className="w-[20%] pr-2 bg-pink-200"></div>

        <div className="w-[15%] flex items-center justify-center">
          <button
            className="hover:bg-red-300 rounded-lg p-1"
            onClick={() => handleTrashCanClick(instruction.id)}
            ref={buttonRef}
          >
            <Trash2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
