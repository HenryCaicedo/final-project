import React, { useState } from "react";
import Sidebar from "./sidebar.jsx";
import TabContent from "./TabContent.jsx";
import LearnTab from "./LearnComponent/LearnTab.jsx";
import { useNavigate } from "react-router-dom";
import useAuthRedirect from './useAuthRedirect';
import ProfileTab from "./LearnComponent/ProfileTab.jsx";

function Progress() {
  const navigate = useAuthRedirect();
  const [selectedTab, setSelectedTab] = useState("Aprender");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex">
      <div className="w-full sm:w-1/3 md:w-1/4 lg:w-3/10">
        <Sidebar
          profileImage={"src/assets/images/1 O2.png"}
          settingsImage={
            "https://cdn-icons-png.flaticon.com/512/2040/2040504.png"
          }
          onTabChange={handleTabChange}
        />
      </div>
      <div className="w-full sm:w-2/3 md:w-3/4 lg:w-7/10">
        <div style={{ height: "100vh" }}>
          <TabContent title={selectedTab === "Mi cuenta" ? "Mi cuenta" : "Aprender"}>
            {selectedTab === "Mi cuenta" ? <ProfileTab /> : <LearnTab />}
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default Progress;
