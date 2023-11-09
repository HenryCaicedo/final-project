import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavBar from "./AuthNavBar";
import TextField from "./TextField";
import axios from "axios"; // Import Axios
import { MainButton } from "../Theme/ThemeComponents";
export default function SignUp() {
  const [formData, setFormData] = useState({
    nombre: "",
    correoElectronico: "",
    contraseña: "",
  });
  const [isFailure, setIsFailure] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      console.log(JSON.stringify(formData));
      const { confirmPassword, ...formDataWithoutConfirm } = formData;

      console.log(JSON.stringify(formDataWithoutConfirm));
      const response = await axios.post("http://localhost:8080/signup", {
        nombre: formData.nombre,
        correoElectronico: formData.correoElectronico,
        contraseña: formData.contraseña,
      });

      // Check the result of the request
      console.log(response.status);
      if (response.status == 201) {
        // response.data.success returns undefined.
        console.log("SignUp successful!");
        navigate("/progress");
      } else {
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      setIsFailure(true);
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <AuthNavBar login={false} />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="bg-white flex flex-col space-y-5 items-center justify-center text-white w-[40vh] font-bold rounded-[4vh] border-[3px] border-gray-300 shadow-lg p-10">
          <div className="bg-white w-[15vh] h-[15vh] rounded-full absolute top-[16vh] border-[3px] border-gray-300 shadow-lg"></div>
          <TextField
            placeholder={"Nombre"}
            name="nombre"
            value={formData.nombre}
            onChange={(value) => handleInputChange("nombre", value)}
          />
          <TextField
            placeholder={"Email"}
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={(value) => handleInputChange("correoElectronico", value)}
          />
          <TextField
            placeholder={"Contraseña"}
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={(value) => handleInputChange("contraseña", value)}
          />
          <TextField
            placeholder={"Confirmar contraseña"}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
          />

          <div onClick={handleSignUp} className="w-full">
            <MainButton>Crear cuenta</MainButton>
          </div>
          {isFailure ? (
            <div className="bg-black">
              Ha ocurrido un error al crear el usuario.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
