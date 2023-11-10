import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Instruction({ user: instruction }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: instruction.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="flex bg-white rounded-2xl py-2 px-5 font-semibold text-lg items-center space-x-3 border-[3px] 
      hover:bg-gray-100 hover:border-gray-200"
    >
      <h1>{instruction.type}</h1>
      
    </div>
  );
}

export default Instruction;