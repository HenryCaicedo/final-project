import { createContext, useState } from "react";

const InstructionsContext = createContext([]);

export function InstructionsProvider({ children }) {
  const [instructions, setInstructions] = useState([]);

  const addInstruction = (newInstruction) => {
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
