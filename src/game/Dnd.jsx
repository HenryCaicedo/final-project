import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Instruction from "./Instruction";

function DndComponent() {
  
  const [instruction, setInstruction] = useState([
    { id: 1, type: "forward", value: 9 },
    { id: 2, type: "right" },
    { id: 3, type: "forward", value: 1 },
    { id: 4, type: "right" },
    { id: 5, type: "forward", value: 9 },
    { id: 6, type: "left" },
    { id: 7, type: "forward", value: 1 },
    { id: 8, type: "left" }
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setInstruction((people) => {
        const oldIndex = people.findIndex((instruction) => instruction.id === active.id);
        const newIndex = people.findIndex((instruction) => instruction.id === over.id);

        console.log(arrayMove(people, oldIndex, newIndex));
        return arrayMove(people, oldIndex, newIndex);
      });
    }

    console.log("drag end");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/6">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <h1 className="text-2xl font-bold" >Instructions</h1>
          
          <SortableContext
            items={instruction}
            strategy={verticalListSortingStrategy}
          >
            {instruction.map((user) => (
              <Instruction key={user.id} user={user} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default DndComponent;