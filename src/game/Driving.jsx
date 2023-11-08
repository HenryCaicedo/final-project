import React from "react";
import { Link } from 'react-router-dom';
import GameScreen from "./GameScreen";
import DndComponent from "./Dnd";
import { X } from "lucide-react";



function CloseButton() {
  return (
    <Link to="/progress">  {/* Use the Link component with the "to" attribute */}
      <button className="p-3 border-gray-400 border-2 border-b-4 rounded-full">
        <X color='gray' size={32} />
      </button>
    </Link>
  )

}


function InstructionTool({ children }) {
  return (
    <div className="rounded-2xl bg-[#ececec] py-2 px-5 mx-3 my-3 font-semibold text-lg">
      {children}
    </div>
  )
}



// TO DO: Un color por instrucción
function InstructionToolBox() {
  return (
    <div className="border-2 border-gray-300 rounded-3xl flex align-middle justify-center bg-white px-2">
      <InstructionTool>Avanzar</InstructionTool>
      <InstructionTool>Izquierda</InstructionTool>
      <InstructionTool>Derecha</InstructionTool>
      <InstructionTool>Condicional</InstructionTool>
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
    </nav>
  );
}

function GamePanel() {
  return (
    <div className="bg-white w-full h-full border-2 border-gray-300 rounded-3xl flex items-center justify-center">
      <GameScreen />
    </div>
  )
}


function CodePanel() {
  return (
    <div className="bg-white w-full h-full border-2 border-gray-300 rounded-3xl">
      <DndComponent />
    </div>
  )
}



export default function Driving() {
  function myfunction() {
    // Mientras tanto para solucionar el problema con abrirlo desde progreso.
    window.location.reload();
  }
  return (
    <div className="flex flex-col h-screen mx-10">
      <div className="m-10 flex flex-col h-screen">
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
      </div>

    </div>
  );
}




