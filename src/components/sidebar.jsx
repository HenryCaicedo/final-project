import { MoreVertical, ChevronLast, ChevronFirst, BoxIcon } from "lucide-react";
import React from "react";

function Tab({ icon, label }) {
  return (
    <div className="p-4 flex items-center">
      <div className="text-3xl text-black mr-4">{icon}</div> {/* Use the passed icon as a component with larger black text */}
      <div className="text-lg font-semibold text-black">{label}</div> {/* Use the passed label as the word with larger black text */}
    </div>
  );
}


function SidebarHeader() {
  return (
    <div className="p-4 flex items-center">
      <div className="text-3xl text-black mr-4"><BoxIcon className="mr-2" /></div>
      <div className="text-lg font-semibold text-black">Application</div> 
    </div>
  );
}



function Sidebar({ profileImage, settingsImage }) {
  return (
    <div className="h-full w-full space-y-24 py-32 pl-14">
      <div className="space-y-2">
        <SidebarHeader/>
        <Tab icon={<MoreVertical className="mr-2" />} label="Tab" />
        <Tab icon={<ChevronFirst className="mr-2" />} label="Settings" />
      </div>
      
      <Tab icon={<ChevronLast className="mr-2" />} label="Lol" />
    </div>
  );
}

export default Sidebar;
