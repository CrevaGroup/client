import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flechaVolver from "../assets/flechaVolver.svg";
import logo from "../assets/logo.png";
import imgGoogle from "../assets/LogosGoogleIcon.svg";
import nuevaImagen from "../assets/Sign up-amico.png";
import { useDispatch } from "react-redux";
import { createUser, googleLogin } from "../Redux/Actions/actions";
import Select from "react-select";

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
  const currentYear = new Date().getFullYear();

  const [birthdate, setBirthdate] = useState({
    day: "",
    month: "",
    year: currentYear,
  });
  const [nationality, setNationality] = useState("");
  const [countries, setCountries] = useState([
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "México",
    "Perú",
    "Venezuela",
    "Estados Unidos",
  ]);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    birthdate: "",
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
    } else if (field === "birthdate") {
      setBirthdate(value);
      const age = calculateAge(value);
      if (age < 18) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          birthdate: "Debes ser mayor de 18 años.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          birthdate: "",
        }));
      }
    }
  };

  const handleLogin = () => {
    if (Object.values(errors).some((error) => error !== "")) {
      return;
    }
    dispatch(createUser(username, password, email, birthdate, nationality));
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
          <div className="mb-6">
            <label
              htmlFor="birthdate"
              className="text-white text-sm mb-2 block"
            >
              Fecha de Nacimiento
            </label>
            <div style={{ display: "flex", width: "100%" }}>
              <Select
                className="custom-select"
                value={birthdate.day}
                options={Array.from({ length: 31 }, (_, i) => ({
                  label: (i + 1).toString(),
                  value: (i + 1).toString(),
                }))}
                onChange={(selectedOption) =>
                  handleValidation("birthdate", {
                    ...birthdate,
                    day: selectedOption,
                  })
                }
                placeholder="Día"
              />
              <Select
                className="custom-select mx-4"
                value={birthdate.month}
                options={[
                  "Enero",
                  "Febrero",
                  "Marzo",
                  "Abril",
                  "Mayo",
                  "Junio",
                  "Julio",
                  "Agosto",
                  "Septiembre",
                  "Octubre",
                  "Noviembre",
                  "Diciembre",
                ].map((month, index) => ({
                  label: month,
                  value: (index + 1).toString(),
                }))}
                onChange={(selectedOption) =>
                  handleValidation("birthdate", {
                    ...birthdate,
                    month: selectedOption,
                  })
                }
                placeholder="Mes"
              />
              <Select
                className="custom-select"
                value={birthdate.year}
                options={Array.from(
                  { length: currentYear - 1923 + 1 },
                  (_, i) => ({
                    label: (currentYear - i).toString(),
                    value: (currentYear - i).toString(),
                  })
                )}
                onChange={(selectedOption) =>
                  handleValidation("birthdate", {
                    ...birthdate,
                    year: selectedOption,
                  })
                }
                placeholder="Año"
              />
            </div>
            {errors.birthdate && (
              <p className="text-white text-sm py-1 px-2 rounded mt-1">
                {errors.birthdate}
              </p>
            )}
          </div>
          <div className="mb-6">
            <select
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value="" disabled>
                Seleccione su nacionalidad
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6 text-center">
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
  return "";
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
  return "";
};

const calculateAge = (birthdate) => {
  const birthdateObj = new Date(
    birthdate.year.value,
    birthdate.month.value - 1,
    birthdate.day.value
  );
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthdateObj.getDate())
  ) {
    return age - 1;
  }
  return age;
};

export default Register;
