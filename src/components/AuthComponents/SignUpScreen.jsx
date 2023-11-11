// SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavBar from "./AuthNavBar";
import TextField from "./TextField";
import axios from "axios";
import { MainButton } from "../Theme/ThemeComponents";

export default function SignUp() {
  const [formData, setFormData] = useState({
    nombre: "",
    correoElectronico: "", // Ensure this has a default value (e.g., "")
    contraseña: "",
    confirmPassword: "", // Ensure this has a default value (e.g., "")
  });
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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
      // Validación correo.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.correoElectronico)) {
        console.log("Invalid email");
        setEmailError(true);
        return;
      } else {
        setEmailError(false);
      }
      // Validar nombre
      if (!formData.nombre) {
        console.log("Name cannot be empty or null");
        setNameError(true);
        return;
      } else {
        setNameError(false);
      }
      // Validar contraseña
      if (!formData.contraseña) {
        console.log("Password cannot be empty or null");
        setPasswordError(true);
        return;
      } else {
        setPasswordError(false);
      }
      // Perform password match check
      if (formData.contraseña !== formData.confirmPassword) {
        console.log("Passwords do not match");
        setPasswordError(true);
        return;
      } else {
        setPasswordError(false);
      }

      // If email is valid and passwords match, proceed with the API call
      console.log(JSON.stringify(formData));
      const { confirmPassword, ...formDataWithoutConfirm } = formData;

      console.log(JSON.stringify(formDataWithoutConfirm));
      const response = await axios.post("http://localhost:8080/signup", {
        nombre: formData.nombre,
        correoElectronico: formData.correoElectronico,
        contraseña: formData.contraseña,
      });

      console.log(response.status);

      if (response.status === 201) {
        console.log("SignUp successful!");
        // Navigate to the desired location upon successful signup
        navigate("/progress");
      } else {
        // Log the entire response object to understand the structure
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
            isError={nameError}
            onChange={(value) => handleInputChange("nombre", value)}
          />
          <TextField
            placeholder={"Email"}
            type="email"
            name="correoElectronico"
            isError={emailError}
            value={formData.correoElectronico}
            onChange={(value) => handleInputChange("correoElectronico", value)}
          />
          <TextField
            placeholder={"Contraseña"}
            type="password"
            name="contraseña"
            isError={passwordError}
            value={formData.contraseña}
            onChange={(value) => handleInputChange("contraseña", value)}
          />
          <TextField
            placeholder={"Confirmar contraseña"}
            type="password" // Change type to "password"
            name="confirmPassword"
            isError={passwordError}
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
