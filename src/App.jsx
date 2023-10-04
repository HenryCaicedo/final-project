import React from 'react'
import GameScreen from './GameScreen'
import DndComponent from './Dnd'

export default function App() {
  return (
    <div className="flex w-screen h-screen">
      {/* Left Div */}
      <div className="w-2/5 h-full">
        <div className="h-1/5 bg-purple-400 p-4">
          {/* Content for the top div */}
          Menú de instrucciones aquí
        </div>
        {/* Bottom Div */}
        <div className="h-4/5 bg-blue-500 p-4">
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
