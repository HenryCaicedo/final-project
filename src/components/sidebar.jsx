import React from 'react';
function Sidebar({ profileImage, settingsImage }) {
  return (
    <div className="bg-gray-200 text-gray-800 w-32 h-screen fixed top-0 left-0 p-4 border-r-2 border-blue-200 flex flex-col">
      <div className="py-8 text-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
      </div>
      <div className="py-8 text-center mt-auto">
        <img
          src={settingsImage}
          alt="Settings"
          className="w-24 h-24 rounded-full"
        />
      </div>
    </div>
  );
}

export default Sidebar;

