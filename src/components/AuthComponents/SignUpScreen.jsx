// SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthNavBar from "./AuthNavBar";
import TextField from "./TextField";
import axios from "axios";
import { MainButton } from "../Theme/ThemeComponents";

export default function SignUp() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correoElectronico: "", // Ensure this has a default value (e.g., "")
    contrasena: "",
    confirmPassword: "", // Ensure this has a default value (e.g., "")
  });
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // const [isFailure, setIsFailure] = useState(false); -- No tocar por el momento, esta aqui por si luego se deja de usar window.alert.
  const [anyError, setAnyError] = useState(false);
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
        setAnyError(true);
      } else {
        setEmailError(false);
      }
      // Validar nombre
      if (!formData.nombre) {
        console.log("Name cannot be empty or null");
        setNameError(true);
        setAnyError(true);
      } else {
        setNameError(false);
      }
      // Validar contrasena
      if (
        !formData.contrasena ||
        formData.contrasena !== formData.confirmPassword
      ) {
        console.log("Password cannot be empty or null");
        setPasswordError(true);
        setAnyError(true);
      } else {
        setPasswordError(false);
        setAnyError(false);
      }

      if (anyError) {
        window.alert(
          "¡Ups! 🙈 Parece que ha habido un pequeño desliz al ingresar los datos. ¡No te preocupes, todos cometemos errores! 🤷‍♂️ Intenta verificar e ingresarlos nuevamente 💻💪 "
        );
        return;
      }

      // If email is valid and passwords match, proceed with the API call
      console.log(JSON.stringify(formData));
      const { confirmPassword, ...formDataWithoutConfirm } = formData;

      console.log(JSON.stringify(formDataWithoutConfirm));
      const response = await axios.post(
        "https://api-coderacers.onrender.com/signup",
        {
          nombre: formData.nombre,
          correoElectronico: formData.correoElectronico,
          contrasena: formData.contrasena,
        }
      );
      localStorage.removeItem('token');
      localStorage.removeItem('id');

      const { token, id } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('id', id);

      console.log(response.status);

      if (response.status === 201) {
        console.log("SignUp successful!");
        setShowConfirmation(true);
        // Navigate to the desired location upon successful signup
       
      } else {
        // Log the entire response object to understand the structure
        console.log(response.data);
      }
    } catch (error) {
      // Handle errors
      // setIsFailure(true); No tocar por el momento, esta aqui por si luego se deja de usar window.alert.
      console.error("Error:", error);
      if (error.response.status === 400) {
        console.log("Email ya existente");
        window.alert(
          "¡Ops! Parece que algo salió mal. 🚫📧 Parece que este correo ya ha sido usado. ¿Seguro que no te registraste antes? Si es así, revisa la dirección de correo electrónico o intenta con otro. ¡No te preocupes, encontrarás el camino correcto! 💡💻 ¡Sigue intentándolo! 🔄💪"
        );
      }
      if (error.response.status === 500) {
        console.log("Error al crear el usuario");
        window.alert(
          "¡Ay, qué pena! 🙊 Algo salió mal en el servidor. 🚫🔄 Intenta nuevamente en un momentito. A veces, hasta los servidores necesitan un descanso breve. 💤💻 ¡No te preocupes, estamos en esto juntos! 🤝 ¡Vamos, inténtalo de nuevo! 🔄💪"
        );
      }

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
            placeholder={"contrasena"}
            type="password"
            name="contrasena"
            isError={passwordError}
            value={formData.contrasena}
            onChange={(value) => handleInputChange("contrasena", value)}
          />
          <TextField
            placeholder={"Confirmar contrasena"}
            type="password" // Change type to "password"
            name="confirmPassword"
            isError={passwordError}
            value={formData.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
          />

          <div onClick={handleSignUp} className="w-full">
            <MainButton>Crear cuenta</MainButton>
          </div>
          {/* {isFailure ? (
            <div className="bg-black">
              Ha ocurrido un error al crear el usuario.
            </div>
          ) : null} -- No tocar por el momento, esta aqui por si luego se deja de usar window.alert.*/}



      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <p className="text-2xl mb-4 text-black">¡Enhorabuena! 🎉🌟 Tu cuenta ha sido creada exitosamente. <br/> ¡Bienvenido al equipo! 🚀✨ <br/>Ahora, estás listo para explorar y disfrutar de todas las increíbles experiencias que te esperan. 🌍💻<br/> ¡Que comience la aventura! 🎊🔐 #NuevoComienzo ¡Enhorabuena por este emocionante paso! 🥳👏</p>
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                onClick={() => {
                  setShowConfirmation(false);
                  navigate("/login");
                }}
              >
                ¡Gracias! 🌟
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
