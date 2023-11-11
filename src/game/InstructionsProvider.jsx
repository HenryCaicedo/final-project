import { createContext, useState } from "react";

const InstructionsContext = createContext([]);

export function InstructionsProvider({children}){
    const [instructions, setInstructions] = useState([]);

    const addInstruction = (newInstruction) => {
        setInstructions([...instructions, newInstruction])
    }

    return <InstructionsContext.Provider value={{instructions, setInstructions, addInstruction}}>
        {children}
    </InstructionsContext.Provider>
}

export default InstructionsContext;