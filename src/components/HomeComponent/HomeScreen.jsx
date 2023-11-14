import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { MainButton, SecondaryButton } from "../Theme/ThemeComponents";
import homeImage from "../Images/home_image.png";
import { appName } from "../temp";

const title = "¡QUÉ BUENO VERTE!";
const text =
  "¿Estás listo para explorar? ¡Únete a nosotros en este increíble viaje!";

export default function HomeScreen() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-white p-4 rounded-lg mb-24 w-fit flex flex-col items-center justify-center space-y-6">
          <div className="space-y-2">
            <div className="text-gray-600 font-bold text-3xl text-center">
              {title}
            </div>
            <div className="text-gray-400 font-semibold text-3xl w-full lg:w-[45rem] text-center">
              {text}
            </div>
          </div>

          <div className="w-[18rem] flex items-center justify-center">
            <img src={homeImage} alt="Logo" />
          </div>
          <div className="flex flex-col space-y-2 w-fit">
            <Link to="/signup">
              <MainButton textSize="text-xl" width="w-[19rem]">
                Empezar
              </MainButton>
            </Link>
            <Link to="/login">
              <SecondaryButton textSize="text-xl">
                Ya tengo una cuenta
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-2">&copy; 2023</footer>
    </div>
  );
}
