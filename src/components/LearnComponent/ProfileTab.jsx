import React from 'react';
import { Car } from 'lucide-react';

export default function ProfileTab() {
  return (
    <div className="flex items-center justify-center flex-col mt-16 space-y-8">
      <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center">
        <Car size={64} color='black'/>
      </div>
      <div className="mt-6 text-center">
        <p className="text-4xl font-bold">Nombre de Usuario</p>
        <p className="text-gray-600 text-2xl">correo@example.com</p>
      </div>

        <button className='bg-red-500 rounded-2xl text-[2.3vh] text-white px-4 py-2'>Eliminar cuenta</button>
    </div>
  );
}
