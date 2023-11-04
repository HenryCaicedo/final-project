import { CarFront, LogOutIcon } from "lucide-react";
import { Icon } from '@iconify/react';
import React from "react";




function SidebarHeader() {
  return (
    <div className="p-4 flex items-center w-full space-x-2">
      <div className="text-black mr-4" size={50}><CarFront color="darkblue" size={42} /></div>
      <div className="text-2xl font-semibold text-blue-900">AppName</div>
    </div>
  );
}


function Tab({ icon, label }) {
  return (
    <button className="px-4 py-3 flex items-center w-full
      hover:bg-zinc-200 hover:rounded-lg space-x-2">
      <div className="text-[4.5vh] text-black mr-4">{icon}</div> {/* Use the passed icon as a component with larger black text */}
      <div className="text-xl font-semibold text-black">{label}</div> {/* Use the passed label as the word with larger black text */}
    </button>
  );
}


function Sidebar({ profileImage, settingsImage }) {
  return (
    <div className="h-full w-full py-24 pl-14">
      <div className="flex flex-col justify-between h-full ">


        <div className="space-y-2 ">
          <div className="h-1/6  w-full flex flex-col justify-center border-b-2 border-gray-200 pb-14 pt-5">
            <SidebarHeader />
          </div>
          <div className="px-5">
            <Tab icon={<Icon icon="flat-color-icons:businesswoman" />} label="My account" />
            <Tab icon={<Icon icon="flat-color-icons:graduation-cap" />} label="Learn" />
            <Tab icon={<Icon icon="flat-color-icons:settings" />} label="Settings" />
          </div>

        </div>

        <div className="border-t-2 border-gray-200">
          <div className="pt-2" >
            <Tab icon={<LogOutIcon className="mr-2 text-red-500" />} label="Log out" />
          </div>

        </div>
      </div>


    </div>
  );
}

export default Sidebar;
