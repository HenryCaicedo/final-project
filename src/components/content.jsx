import React from 'react';
import UnitContainer from './UnitContainer';

function Content() {
  return (
    <div className="bg-gray-100 m-10 ml-32 rounded-5 shadow-md p-5 max-w-full">
      <div className="rounded-md h-14 bg-purple-200 border border-purple-600 text-purple-600 text-left rounded-6 w-48">
        <h1 className="text-3xl pl-4">Progreso</h1>
      </div>
      <div className="max-w-1/2 pl-10 pb-5">
      <UnitContainer title="Unidad 1"  />
        <UnitContainer title="Unidad 2" />
      </div>
    </div>
  );
}
export default Content;
