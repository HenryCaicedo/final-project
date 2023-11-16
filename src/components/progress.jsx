import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar.jsx";
import TabContent from "./TabContent.jsx";
import LearnTab from "./LearnComponent/LearnTab.jsx";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Progress() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si existe un token y un ID almacenados
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    if (token && id) {
      // Realizar la solicitud HTTP para verificar el token
      Axios.post("https://api-coderacers.onrender.com/logged")
        .then((response) => {
          // Si la solicitud es exitosa, el token es válido
          setIsLoggedIn(true);
        })
        .catch((error) => {
          // Si la solicitud falla, el token es inválido o expirado
          console.error("Error al verificar el token:", error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
    if (!isLoggedIn) {
      // Redirigir al usuario a la pantalla de inicio si no está autenticado
      navigate("/"); // Cambia esto a la ruta de tu pantalla de inicio
       // Evitar renderizar el resto del componente
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  if (!isLoggedIn) {
    // Redirigir al usuario a la pantalla de inicio si no está autenticado
    // Cambia esto a la ruta de tu pantalla de inicio
    return null; // Evitar renderizar el resto del componente
  }

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
