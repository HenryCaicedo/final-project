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
      className="bg-white p-4 rounded-md shadow-md my-2 text-slate-950"
    >
      <h1>{instruction.type}</h1>
      
    </div>
  );
}

export default Instruction;