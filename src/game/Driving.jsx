import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import GameScreen from "./GameScreen";
import DndComponent from "./Dnd";
import { X, ChevronsRight, CornerUpRight, CornerUpLeft, TimerReset, Banana, Play, StopCircle, Eye, HelpCircle } from "lucide-react";
import InstructionsContext, { InstructionsProvider } from "./InstructionsProvider";
import newGuid from "../utils/newGuid";


// NAVBAR

function CloseButton() {
  return (
    <Link to="/progress">
      <button className="p-3 border-gray-400 border-2 rounded-full hover:bg-gray-200 focus:bg-gray-300">
        <X color='gray' size={32} />
      </button>
    </Link>
  )

}

function HelpButton() {
  return (
    <button className="p-3 border-gray-400 border-2 rounded-full hover:bg-gray-200 focus:bg-gray-300">
      <HelpCircle color='gray' size={32} />
    </button>
  )

}


function InstructionTool({ children, bgColor = 'bg-[#ececec]', borderColor = 'border-transparent', icon = <Banana />, type }) {
  const { addInstruction } = useContext(InstructionsContext)

  const handleClick = () => {
    let newInstruction;
    if (type === 'forward') {
      newInstruction = { id: newGuid(), type: type, value: 1 };
    } else {
      newInstruction = { id: newGuid(), type: type };
    }
    addInstruction(newInstruction)
  };

  return (
    <button onClick={handleClick} className={`flex rounded-2xl py-2 px-5 mx-2 my-3 font-semibold text-lg items-center space-x-3 border-4
     hover:bg-gray-100 hover:border-gray-200
    ${bgColor} ${borderColor}`}>
      <div className="flex items-center">
        {icon}
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </button>

  )
}



// TO DO: Un color por instrucción
function InstructionToolBox() {

  return (
    <div className="border-2 border-gray-300 rounded-3xl flex align-middle justify-center bg-white px-2">
      <InstructionTool type='forward' icon={<ChevronsRight />} bgColor="bg-pink-100" borderColor="border-pink-200">Avanzar</InstructionTool>
      <InstructionTool type='left' icon={<CornerUpLeft />} bgColor="bg-blue-100" borderColor="border-blue-200">Izquierda</InstructionTool>
      <InstructionTool type='right' icon={<CornerUpRight />} bgColor="bg-green-100" borderColor="border-green-200">Derecha</InstructionTool>
      <InstructionTool type='wait' icon={<Eye />} bgColor="bg-orange-100" borderColor="border-orange-200">Observar</InstructionTool>
    </div>
  )
}


function NavBar() {
  return (
    <nav className="font-sans flex items-center justify-between w-full">
      <CloseButton />
      <div className="flex-1 flex justify-center items-center">
        <InstructionToolBox />
      </div>
      <HelpButton />
    </nav>
  );
}



// GAME PANEL

function GamePanel() {
  return (
    <div className="bg-white w-full h-full border-2 border-gray-300 rounded-3xl flex items-center justify-center">
      <GameScreen />
    </div>
  )
}


function CodePanel() {
  return (
    <div className="bg-white w-full flex flex-col h-[80vh] border-2 border-gray-300 rounded-3xl">
      <div className="flex-1">

        <RunCodeBar />
      </div>
      <div className="w-full  h-full overflow-auto">
        <DndComponent />
      </div>
    </div>
  )
}


// CODE PANEL

function RunCodeBar() {
  return (
    <div className="w-full flex py-3 px-8 items-center border-b-2">
      <div className="w-1/2 font-medium text-xl">
        Código
      </div>
      <div className="w-1/2 flex justify-end">
        {/*<RunCodeButton />*/}
        <button className="bg-gray-100 py-2 px-3 rounded-2xl text-black font-medium flex space-x-2 items-center border-[3px]
    hover:bg-gray-200" id="run_code">
          <Play />
          Ejecutar
        </button>
      </div>

    </div>
  )
}



export default function Driving() {
  function myfunction() {
    // Mientras tanto para solucionar el problema con abrirlo desde progreso.
    window.location.reload();
    const navigate = useAuthRedirect();

  }
  return (
    <div className="flex flex-col h-screen mx-10">
      <div className="m-10 flex flex-col h-screen">
        <InstructionsProvider>
          {/* NavBar */}
          <nav>
            <NavBar />
          </nav>

          {/* Main */}
          <main className="flex-1 flex space-x-5 mt-2">
            <div className="flex-1 h-full flex items-center justify-center">
              <GamePanel />
            </div>
            <div className="w-[40vh] flex items-center justify-center">
              <CodePanel />
            </div>
          </main>
        </InstructionsProvider>
      </div>

    </div>
  );
}




