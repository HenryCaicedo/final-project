import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Instruction from "./Instruction";
import { getInstructions, updateInstructions } from "./instructionList";

var instructionList = getInstructions();

function DndComponent() {
  const [instruction, setInstruction] = useState(instructionList);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setInstruction((people) => {
        const oldIndex = people.findIndex((instruction) => instruction.id === active.id);
        const newIndex = people.findIndex((instruction) => instruction.id === over.id);

        instructionList = arrayMove(people, oldIndex, newIndex);
        updateInstructions(instructionList)
        return arrayMove(people, oldIndex, newIndex);
      });
    }

    console.log("drag end");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-5/6 py-3 space-y-1">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={instruction}
            strategy={verticalListSortingStrategy}
          >
            {instruction.map((user) => (
              <Instruction key={user.id} user={user}/>
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default DndComponent;