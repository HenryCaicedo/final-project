import React, { useState } from 'react';
import { Car } from 'lucide-react';

export default function ProfileTab() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteAccount = () => {
    // Implement your delete account logic here
    // You can show the confirmation window before actually deleting the account
    // For now, let's just log a message to the console
    console.log('Account deleted!');
  };

  return (
    <div className="flex items-center justify-center flex-col mt-16 space-y-8">
      <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center">
        <Car size={64} color='black'/>
      </div>
      <div className="mt-6 text-center">
        <p className="text-4xl font-bold">Nombre de Usuario</p>
        <p className="text-gray-600 text-2xl">correo@example.com</p>
      </div>

      <button
        className='bg-red-500 rounded-2xl text-[2.3vh] text-white px-4 py-2'
        onClick={() => setShowConfirmation(true)}
      >
        Eliminar cuenta
      </button>

      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <p className="text-2xl mb-4">¿Estás seguro de que quieres eliminar tu cuenta?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                onClick={() => {
                  setShowConfirmation(false);
                  handleDeleteAccount();
                }}
              >
                Sí, eliminar
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={() => setShowConfirmation(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
