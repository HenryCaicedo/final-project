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
      
      if (error.response.status === 400) {
        console.log("Email y contraseña incorrectos");
        window.alert(
          "¡Ups! 🙈 Parece que ha habido un pequeño desliz al ingresar los datos. ¡No te preocupes, todos cometemos errores! 🤷‍♂️ Intenta verificar e ingresarlos nuevamente 💻💪 "
        );
      }
      if (error.response.status === 401) {
        console.log("Contraseña incorrecta");
        window.alert(
          "¡Ups! 🙈 Parece que ha habido un pequeño desliz al ingresar los datos. ¡No te preocupes, todos cometemos errores! 🤷‍♂️ Intenta verificar  tu contraseña e ingresarlos nuevamente 💻💪 "
        );
      }
      if (error.response.status === 404) {
        console.log("Usuario no encontrado")
        window.alert(
          "¡Ups! 🙈 Parece que ha habido un pequeño desliz al ingresar los datos. ¡No te preocupes, todos cometemos errores! 🤷‍♂️ Intenta verificar  tu contraseña e ingresarlos nuevamente 💻💪 "
        );
        

      }
      if (error.response.status === 500) {

        console.log("Error de servidor");
        window.alert(
          "¡Ay, qué pena! 🙊 Algo salió mal en el servidor. 🚫🔄 Intenta nuevamente en un momentito. A veces, hasta los servidores necesitan un descanso breve. 💤💻 ¡No te preocupes, estamos en esto juntos! 🤝 ¡Vamos, inténtalo de nuevo! 🔄💪"
        );
      // Navigate to the desired location upon successful signup

      }
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
          <div onClick={handleLogin} className="w-full">
            <MainButton>Entrar</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
