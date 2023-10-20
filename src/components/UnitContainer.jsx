import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const activitiesFolderPath = '../game'; // Replace with the actual path

function UnitContainer({ title }) {

  const jsFiles = getJSFilesInFolder(activitiesFolderPath);

  function getJSFilesInFolder(folderPath) {
    // .
    // Queda pendiente discutir si es mejor esto en progreso o en la pantalla que carga.
    // 
    return ['Driving.jsx','activity1.js'];
  }

  const renderActivity = (activityName) => {
    const ActivityComponent = lazy(() => import(/* @vite-ignore */ `../game/${activityName}`));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ActivityComponent />
      </Suspense>
    );
  };

  return (
    <div className="UnitContainer bg-purple-200 p-5 m-5 border border-purple-600 rounded-2xl flex flex-col overflow-hidden">
      <h2 className="text-2xl text-purple-600 mb-4">{title}</h2>
      <div className="ButtonRow space-x-4 space-y-2">
        {jsFiles.map((activity, index) => (
          <Link to={`/app`} key={index}>
            <button
              className="bg-purple-600 text-white rounded-full py-3 px-6 hover-bg-purple-800"
            >
              {activity}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UnitContainer;
