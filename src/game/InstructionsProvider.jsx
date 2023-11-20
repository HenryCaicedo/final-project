import { createContext, useState } from "react";

const InstructionsContext = createContext([]);

export function InstructionsProvider({ children }) {
  const [instructions, setInstructions] = useState([]);

  const addInstruction = (newInstruction) => {
    console.log(instructions)
    if (instructions.length > 0 && newInstruction.type === 'forward'  && instructions[instructions.length - 1].type === "forward"){
      setInstructions((prevInstructions) =>
      prevInstructions.map((instruction) =>
          instruction.id === instructions[instructions.length - 1].id
          ? { ...instruction, value: instruction.value + 1 }
          : instruction
      )
      
    );
    return;
    }
    setInstructions([...instructions, newInstruction]);
  };




  const removeInstruction = (instructionId) => {
    setInstructions((prevInstructions) =>
      prevInstructions.filter((instruction) => instruction.id !== instructionId)
    );
  };

  const updateInstructionValue = (instructionId, amount) => {
    setInstructions((prevInstructions) =>
      prevInstructions.map((instruction) =>
        instruction.id === instructionId
          ? { ...instruction, value: instruction.value + amount }
          : instruction
      )
    );
  };

  return (
    <InstructionsContext.Provider
      value={{ instructions, setInstructions, addInstruction, removeInstruction, updateInstructionValue }}
    >
      {children}
    </InstructionsContext.Provider>
  );
}

export default InstructionsContext;
