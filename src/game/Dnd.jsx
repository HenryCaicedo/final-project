// Dnd.jsx
import { useContext, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Instruction from "./Instruction";
// import { getInstructions, updateInstructions } from "./instructionList";
import InstructionsContext from "./InstructionsProvider";

// Initialize instruction list
// var instructionList = getInstructions();

function DndComponent() {
  const {instructions, setInstructions} = useContext(InstructionsContext);

  // Function to handle drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = instructions.findIndex((instr) => instr.id === active.id);
      const newIndex = instructions.findIndex((instr) => instr.id === over.id);
      const reOrderedInstructions = arrayMove(instructions, oldIndex, newIndex);
      setInstructions(reOrderedInstructions);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-5/6 py-3 space-y-1">

        {/* Drag and drop context */}
        <DndContext collisionDetection={closestCenter} 
        onDragEnd={handleDragEnd}
        >
          <SortableContext items={instructions} strategy={verticalListSortingStrategy}>
            {/* Render each instruction */}
            {instructions.map((instruction) => (
              <Instruction key={instruction.id} user={instruction} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default DndComponent;
