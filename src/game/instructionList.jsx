// instructions.jsx
import { updateGameInstructions } from "./GameScreen";

let instructionList = [
    { id: 1, type: "forward", value: 1 },
    //{ id: 2, type: "left" },
    //{ id: 3, type: "forward", value: 1 },
    //{ id: 4, type: "forward", value: 1 },
    //{ id: 5, type: "forward", value: 1 },
    //{ id: 6, type: "forward", value: 1 },
    //{ id: 7, type: "right" },
    //{ id: 8, type: "forward", value: 1 },
    //{ id: 9, type: "left" },
    //{ id: 10, type: "forward", value: 1 },
    //{ id: 11, type: "left" }
    
  ];
  
  const getInstructions = () => instructionList;
  
  const updateInstructions = (newInstructions) => {
    instructionList = newInstructions;
    updateGameInstructions(instructionList);
  };




  const addInstruction = (type) => {
    console.log('Here')
  
    let newInstruction;
  
    if (type === 'forward') {
      newInstruction = { id: instructionList.length + 1, type: type, value: 1 };
    } else {
      newInstruction = { id: instructionList.length + 1, type: type };
    }
  
    instructionList.push(newInstruction);
    updateGameInstructions(instructionList);
  };

  
  export { addInstruction, getInstructions, updateInstructions };
  