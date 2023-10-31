import React from "react";
import Sidebar from "./sidebar.jsx";
import Content from "./content.jsx";
function Progress() {
  return (
    <div className="bg-bluen h-screen w-screen">
      <Sidebar
        profileImage={"src/assets/images/1 O2.png"}
        settingsImage={
          "https://cdn-icons-png.flaticon.com/512/2040/2040504.png"
        }
      />
      <Content className="ml-4" />
    </div>
  );
}
export default Progress;
