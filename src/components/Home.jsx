import React from "react";

// import Progress from '../components/progress.jsx';
// import Driving from './game/Driving.jsx';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-bluen h-screen w-screen">
      <div className="bg-[url('./src/assets/images/background.png')] bg-center flex flex-col items-center h-screen w-screen p-4">
        <div
          className="text-center text-ambern text-8xl drop-shadow font-bold font-open-sans"
          style={{ marginTop: "3vw", marginBottom: "2vw" }}
        >
          Inicio
        </div>
        <div
          className="text-center text-yellown text-5xl drop-shadow font-bold font-open-sans"
          style={{ marginTop: "6vw", marginBottom: "4vw" }}
        >
          Haz clic en una de las opciones para continuar!
        </div>
        <div className="flex space-x-4">
          <div
            className="bg-yellown w-[50vh] h-64 rounded-3xl shadow"
            style={{
              width: "20vw",
              height: "22vw",
              marginRight: "10vw",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Link className="grid justify-center h-full" to={`/progress`}>
              <img
                className="relative top-[-1vh] w-full h-full rounded-lg"
                src="src\assets\images\1 SCENE.PNG"
                alt="Image 1"
              />
              <p className="text-darkbn relative top-[-3vh] text-center text-4xl drop-shadow font-bold">
                Learn
              </p>
            </Link>
          </div>
          <div
            className="bg-yellown  w-1/2 h-64 rounded-3xl shadow"
            style={{
              width: "20vw",
              height: "22vw",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <div className="grid justify-center h-full">
              <img
                className="relative top-[-4vh] w-full h-full rounded-lg"
                src="src\assets\images\1 O2.PNG"
                alt="Image 2"
              />
              <div className="text-darkbn relative top-[-7vh] text-center text-4xl drop-shadow font-bold">
                Perfil
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
