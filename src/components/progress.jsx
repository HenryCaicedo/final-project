import React from "react";
import Sidebar from "./sidebar.jsx";
import TabContent from "./TabContent.jsx";
import LearnTab from "./LearnComponent/LearnTab.jsx";

function Progress() {
  return (
    <div className="flex">
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-3/10">
        <Sidebar
          profileImage={"src/assets/images/1 O2.png"}
          settingsImage={
            "https://cdn-icons-png.flaticon.com/512/2040/2040504.png"
          }
        />
      </div>
      <div className="w-full sm:w-2/3 md:w-3/4 lg:w-7/10">
        <div style={{ height: "100vh" }}>
          <TabContent title={"Learn"}>
            <LearnTab />
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default Progress;
