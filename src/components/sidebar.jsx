// Sidebar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CarFront, LogOutIcon } from "lucide-react";
import { appName } from "./temp";

function SidebarHeader() {
  return (
    <div className="px-8 flex items-center w-full space-x-1">
      <div className="text-black mr-4" size={50}>
        <CarFront color="#5686E1" size={42} />
      </div>
      <div className="text-2xl font-bold text-[#5686E1]">{appName}</div>
    </div>
  );
}

function Tab({
  icon,
  label,
  showTooltips,
  tooltipContent,
  onClick,
  route,
  isSelected,
}) {
  const tabStyle = isSelected
    ? "relative group px-4 py-3 flex items-center w-full border-l-4 border-gray-500"
    : "relative group px-4 py-3 flex items-center w-full hover:bg-zinc-200 hover:rounded-lg";

  return (
    <button className={tabStyle} onClick={onClick}>
      <div className="text-[4.5vh] text-black mr-4">{icon}</div>
      <div className="text-xl font-semibold text-black">{label}</div>
      {showTooltips && (
        <div className="hidden group-hover:block absolute bottom-8 bg-opacity-75 text-xl left-full w-max p-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg">
          {tooltipContent}
        </div>
      )}
    </button>
  );
}

function Sidebar({ profileImage, settingsImage, onTabChange }) {
  const [showTooltips, setShowTooltips] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Aprender");

  const toggleTooltips = () => {
    setShowTooltips(!showTooltips);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="h-full w-full py-24 pl-14">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2">
          <div className="h-1/6 w-full flex flex-col justify-center border-b-2 border-gray-200 pb-14 pt-5">
            <SidebarHeader
              showTooltips={showTooltips}
              toggleTooltips={showTooltips}
            />
          </div>
          <div className="px-5">
            <Tab
              icon={<Icon icon="flat-color-icons:businesswoman" />}
              label="Mi cuenta"
              tooltip="Manage your account settings"
              showTooltips={showTooltips}
              tooltipContent={<div>¡Revisa tu perfil!</div>}
              onClick={() => handleTabClick("Mi cuenta")}
              isSelected={selectedTab === "Mi cuenta"}
            />
            <Tab
              icon={<Icon icon="flat-color-icons:graduation-cap" />}
              label="Aprender"
              tooltip="Access learning resources"
              showTooltips={showTooltips}
              tooltipContent={<div>¡Realiza un seguimiento de tu desempeño!</div>}
              onClick={() => handleTabClick("Aprender")}
              isSelected={selectedTab === "Aprender"}
            />
            <Tab
              icon={<Icon icon="flat-color-icons:info" />}
              label="Ayuda"
              showTooltips={showTooltips}
              onClick={toggleTooltips}
              tooltipContent={
                <div>
                  ¡Haz click aquí para desactivar las descripciones de ayuda!
                </div>
              }
              isSelected={selectedTab === "Ayuda"}
            />
          </div>
        </div>
        <div className="border-t-2 border-gray-200">
          <div className="pt-2">
            <Link to='/'>
              <Tab
                icon={<LogOutIcon className="mr-2 text-red-500" />}
                label="Log out"
                tooltip="Log out of your account"
                showTooltips={showTooltips}
                route='/'
                onClick={() => localStorage.removeItem("token") &&
                  localStorage.removeItem("id")}
                tooltipContent={<div>¿Deseas desconectarte? Haz click aquí</div>}
                isSelected={selectedTab === "LogOut"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
