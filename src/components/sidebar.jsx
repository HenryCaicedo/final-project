import React from "react";
function Sidebar({ profileImage, settingsImage }) {
  return (
    <div className="bg-darkbn flex text-gray-800 w-1/3 h-screen fixed top-0 left-0 p-4 border-r-2 border-blue-200 flex flex-col">
      <div className="flex space-y-5 justify-center items-center drop-shadow grid">
        <div className=" text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[40vh] h-[40vh] rounded-full"
          />
        </div>
        <div className="text-yellown text-xl text-center relative top-[-6vh]">
          Usuario
        </div>
        <div className="w-[40vh] h-[10vh] drop-shadow text-2xl">
          <div className="text-center text-yellown rounded-lg border-4 border-bluen p-2">
            Editar Perfil
          </div>
        </div>
        <div className="w-[40vh] h-[10vh] drop-shadow text-2xl">
          <div className="text-center text-yellown rounded-lg border-4 border-ambern p-2">
            Configuración
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
