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
    if (amount + instructions.find((instruction) => instruction.id === instructionId).value>= 1){
    setInstructions((prevInstructions) =>
      prevInstructions.map((instruction) =>
        instruction.id === instructionId
          ? { ...instruction, value: instruction.value + amount }
          : instruction
      )
    );}
  };
  function getInstructionIndexById  (instructionId)  {
    const foundIndex = instructions.findIndex((instruction) => instruction.id === instructionId);
    return foundIndex;
  };
  

  return (
    <InstructionsContext.Provider
      value={{ instructions, setInstructions, addInstruction, removeInstruction, updateInstructionValue, getInstructionIndexById }}
    >
      {children}
    </InstructionsContext.Provider>
  );
}

export default InstructionsContext;
