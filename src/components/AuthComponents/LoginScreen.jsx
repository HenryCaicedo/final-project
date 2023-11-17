import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios"; // Import Axios
import AuthNavBar from "./AuthNavBar";
import TextField from "./TextField";
import { MainButton } from "../Theme/ThemeComponents";

export default function LoginScreen() {
  const [formData, setFormData] = useState({
    correoElectronico: "",
    contrasena: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await Axios.post(
        "https://api-coderacers.onrender.com/login",
        {
          correoElectronico: formData.correoElectronico,
          contrasena: formData.contrasena,
        }
      );

      const { token, id } = response.data;

      // Guardar el token en el almacenamiento local

      // Handle the response, e.g., store user data in the state or local storage
      console.log(response.status);

      if (response.status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        console.log(token, id);
        console.log("Login successful!");
        // Navigate to the desired location upon successful signup
        navigate("/progress");
      } else {
        // Log the entire response object to understand the structure
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      // setIsFailure(true); No tocar por el momento, esta aqui por si luego se deja de usar window.alert.
      console.error("Error:", error);
      window.alert(
        "¡Oh no! 🚨 Parece que estamos teniendo problemas para conectar con el servidor. Aquí hay una guía rápida para abordar este percance:\n1. Revisa tu conexión a internet🌐: Asegúrate de estar conectado a una red estable.\n2. Reintenta en unos minutos🕓: A veces, los servidores necesitan un breve descanso.\n"
      );
    }
  };

  return (
    <div>
      <AuthNavBar login={true} />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="bg-white flex flex-col space-y-5 items-center justify-center text-white w-[40vh] font-bold rounded-[4vh] border-[3px] border-gray-300 shadow-lg p-10">
          <div className="bg-white w-[15vh] h-[15vh] rounded-full absolute top-[24vh] border-[3px] border-gray-300 shadow-lg"></div>
          <TextField
            placeholder={"Email"}
            name="email"
            value={formData.correoElectronico}
            onChange={(value) => handleInputChange("correoElectronico", value)}
          />
          <TextField
            placeholder={"Contraseña"}
            type="password"
            name="contraseña"
            value={formData.contrasena}
            onChange={(value) => handleInputChange("contrasena", value)}
          />
          <button onClick={handleLogin} className="w-full">
            <MainButton>Entrar</MainButton>
          </button>
        </div>
      </div>
    </div>
  );
}
