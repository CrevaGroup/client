import React, { useState } from "react";
import { Link } from "react-router-dom";
import flechaVolver from "../assets/flechaVolver.svg";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleValidation = () => {
    const newErrors = {
      username: validateUsername(username),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
      email: validateEmail(email),
    };

    setErrors(newErrors);
  };

  const handleLogin = () => {
    // Realiza las validaciones antes de intentar crear la cuenta
    handleValidation();

    if (Object.values(errors).some((error) => error !== null)) {
      return;
    }

    // Agrega aquí la lógica de creación de cuenta
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div
      style={{ backgroundColor: "#EFEFEF" }}
      className="flex flex-col justify-center items-center h-screen"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      ></div>
      <div
        style={{
          border: "solid 1px #C1C1C1",
          padding: "35px 100px 35px 100px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            backgroundColor: "#C2A3D1",
          }}
          className="bg-C2A3D1 shadow-md rounded p-40  mb-4"
        >
          <Link to="/">
            <button
              style={{
                color: "#7F7F7F",
                position: "relative",
                top: "-90px",
                left: "-100px",
                width: "30px",
                height: "20px",
                borderRadius: "50%",
                border: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              <img
                style={{ width: "15px", height: "15px" }}
                src={flechaVolver}
                alt=""
              />
            </button>
          </Link>
          <h1
            style={{ color: "white" }}
            className="text-2xl text-center font-bold mb-4"
          >
            Registrarse
          </h1>
          <div className="mb-6">
            <input
              style={{ width: "400px" }}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.username ? "border-red-500" : ""
              }`}
              id="nombre"
              type="text"
              placeholder="Nombres"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={handleValidation}
            />
            {errors.username && (
              <p
                style={{ fontSize: ".8rem", marginBottom: "-20px" }}
                className="text-red-600"
              >
                {errors.username}
              </p>
            )}
          </div>
          <div className="mb-6" style={{ position: "relative" }}>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleValidation}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" : "👁️‍🗨️"}
            </button>
            {errors.password && (
              <p
                style={{ fontSize: ".8rem", marginBottom: "-20px" }}
                className="text-red-600"
              >
                {errors.password}
              </p>
            )}
          </div>
          <div className="mb-6" style={{ position: "relative" }}>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              id="conPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handleValidation}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁" : "👁️‍🗨️"}
            </button>
            {errors.confirmPassword && (
              <p
                style={{ fontSize: ".8rem", marginBottom: "-20px" }}
                className="text-red-600"
              >
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="mail"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleValidation}
            />
            {errors.email && (
              <p
                style={{ fontSize: ".8rem", marginBottom: "-20px" }}
                className="text-red-600"
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-6 text-center">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="rememberMe" className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
            </div>
            <button
              style={{ backgroundColor: "#7410A3", color: "white" }}
              className="w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Funciones de validación
const validateUsername = (username) => {
  if (!username) {
    return "El nombre de usuario es obligatorio.";
  }
  if (!/^[a-zA-Z ]+$/i.test(username)) {
    return "El nombre solo puede contener letras y espacios.";
  }
  return null; // Retorna null si no hay errores
};

const validatePassword = (password) => {
  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }
  return null;
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden.";
  }
  return null;
};

const validateEmail = (email) => {
  if (!email) {
    return "El correo electrónico es obligatorio.";
  }
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email)) {
    return "El correo electrónico debe ser una dirección de Gmail válida.";
  }
  return null; // Retorna null si no hay errores
};

export default Register;
