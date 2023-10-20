import React from 'react'
import GameScreen from './GameScreen'
import DndComponent from './Dnd'
import TopLeft from './TopLeft'

export default function Driving() {
  function myfunction () { // Mientras tanto para solucionar el problema con abrirlo desde progreso.
    window.location.reload();
};
  return (
    <div className="flex w-screen h-screen">
      {/* Left Div */}
      <div className="w-2/5 h-full">
        <div className="h-1/5 bg-purple-400 p-4">
          {/* Content for the top div */}
          <TopLeft/>
        </div>
        {/* Bottom Div */}
        <div className="h-4/5 bg-blue-500 p-4">
        {/* <img className="w-12"src="https://cdn-icons-png.flaticon.com/512/5486/5486216.png"  alt="my image"  onClick={()=>myfunction()}/> */}
          <DndComponent />
        </div>
      </div>

      {/* Right Div */}
      <div className="w-3/5 h-full">
        {/* Top Div */}
        <div className="h-1/5 bg-green-500 p-4">
          {/* Content for the top div */}
          Consola aquí
        </div>

        {/* Bottom Div */}
        <div className="h-4/5 bg-yellow-500 p-4">
          <GameScreen />
        </div>
      </div>
    </div>
  )
}
