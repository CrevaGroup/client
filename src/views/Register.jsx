import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flechaVolver from "../assets/flechaVolver.svg";
import logo from "../assets/logo.png";
import imgGoogle from "../assets/LogosGoogleIcon.svg";
import nuevaImagen from "../assets/Sign up-amico.png";
import { useDispatch } from "react-redux";
import { createUser, googleLogin } from "../Redux/Actions/actions";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [age, setAge] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleValidation = (field, value) => {
    if (field === "username") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: validateUsername(value),
      }));
    } else if (field === "password") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(value),
      }));
    } else if (field === "confirmPassword") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: validateConfirmPassword(password, value),
      }));
    } else if (field === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value),
      }));
    }
  };

  const handleLogin = () => {
    if (Object.values(errors).some((error) => error !== "")) {
      return;
    }
    dispatch(createUser(username, password, email, age));
    navigate("/");
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-row">
      <div className="w-full md:w-1/2 p-20 hidden md:flex md:items-center md:justify-center">
        <img src={nuevaImagen} alt="Nueva Imagen" className="w-full h-auto" />
      </div>
      <div
        style={{ flexDirection: "column", margin: "10px" }}
        className="w-full md:w-1/2 flex items-center justify-center"
      >
        <div>
          <img
            style={{
              width: "100px",
              height: "100px",
              margin: "0 auto 20px auto",
              display: "block",
            }}
            src={logo}
            alt=""
          />
        </div>
        <div
          style={{ background: "#C2A3D1" }}
          className="p-8 rounded shadow-md w-full md:w-96"
        >
          <Link to="/">
            <button className="text-gray-600 absolute top-0 left-0 mt-2 ml-2 w-8 h-8 rounded-full border-none">
              <img src={flechaVolver} alt="" className="w-4 h-4 m-auto" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Registrarse
          </h1>
          <div className="mb-6">
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.username ? "border-red-500" : ""
              }`}
              id="nombre"
              type="text"
              placeholder="Nombres"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleValidation("username", e.target.value);
              }}
            />
            {errors.username && (
              <p className="text-white text-sm py-1 px-2 rounded mt-1">
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
              onChange={(e) => {
                setPassword(e.target.value);
                handleValidation("password", e.target.value);
              }}
            />
            {errors.password && (
              <p className="text-white text-sm py-1 px-2 rounded mt-1">
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
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                handleValidation("confirmPassword", e.target.value);
              }}
            />
            {errors.confirmPassword && (
              <p className="text-white text-sm py-1 px-2 rounded mt-1">
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
              onChange={(e) => {
                setEmail(e.target.value);
                handleValidation("email", e.target.value);
              }}
            />
            {errors.email && (
              <p className="text-white text-sm py-1 px-2 rounded mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="mb-6" style={{ position: "relative" }}>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="age"
              type="number"
              placeholder="Edad"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-6 text-center">
            {/* <div className="flex items-center justify-between mb-2">
              <label htmlFor="rememberMe" className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="form-checkbox h-5 w-5 text-purple-600"
                />
                <span className="ml-2 text-white">Recordarme</span>
              </label>
            </div> */}
            <button
              style={{ backgroundColor: "#7410A3" }}
              className="w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Crear Cuenta
            </button>
          </div>
          <div
            style={{
              backgroundColor: "#7410A3",
              display: "flex",
              height: "50px",
              background: "#7410A3",
              justifyContent: "space-between",
              borderRadius: "5px",
              padding: "10px",
            }}
            className="mb-6 text-center"
          >
            <img src={imgGoogle} alt="" />
            <button
              className="w-full text-white font-bold py-0 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                dispatch(googleLogin());
                navigate("/");
              }}
            >
              Registrarse con Google
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
  return ""; // Retorna una cadena vacía si no hay errores
};

const validatePassword = (password) => {
  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }
  return "";
};

const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden.";
  }
  return "";
};

const validateEmail = (email) => {
  if (!email) {
    return "El correo electrónico es obligatorio.";
  }
  // Agrega validación personalizada para el formato de correo si es necesario
  // if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email)) {
  //   return "El correo electrónico debe ser una dirección de Gmail válida.";
  // }
  return ""; // Retorna una cadena vacía si no hay errores
};

export default Register;
