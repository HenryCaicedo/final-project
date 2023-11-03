import React from "react";
import Sidebar from "./sidebar.jsx";
import Content from "./content.jsx";

function Progress() {
  return (
    <div className="flex">
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
        <Sidebar
          profileImage={"src/assets/images/1 O2.png"}
          settingsImage={"https://cdn-icons-png.flaticon.com/512/2040/2040504.png"}
        />
      </div>
      <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/5">
        <Content />
      </div>
    </div>
  );
}

export default Progress;
