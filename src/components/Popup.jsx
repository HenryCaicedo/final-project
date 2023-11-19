// Popup.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Popup = ({ onClose }) => {
  const history = useHistory();

  const handleReturnToMenu = () => {
    history.push('/progress');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Juego terminado</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleReturnToMenu}
        >
          Volver al menú principal
        </button>
      </div>
    </div>
  );
};

export default Popup;
