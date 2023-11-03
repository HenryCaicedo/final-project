import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import React from "react";

function Tab({ icon, label }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
  <div className="text-3xl text-black mr-4">{icon}</div> {/* Use the passed icon as a component with larger black text */}
  <div className="text-lg font-semibold text-black">{label}</div> {/* Use the passed label as the word with larger black text */}
</div>


  );
}

function Sidebar({ profileImage, settingsImage }) {
  return (
    <div className="bg-blue-500 h-full w-full">
      <Tab icon={<MoreVertical className="mr-2" />} label="Tab" />
      <Tab icon={<ChevronFirst className="mr-2" />} label="Settings" />
      <Tab icon={<ChevronLast className="mr-2" />} label="Lol" />
      
    </div>
  );
}

export default Sidebar;
