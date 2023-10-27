import React, { useState } from "react";
import { Link } from "react-router-dom";
import flechaVolver from "../assets/flechaVolver.svg";
import logo from "../assets/logo.png";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#EFEFEF" }}
      className="flex flex-col justify-center items-center h-screen"
    >
      <img
        src={logo}
        alt="Logo"
        style={{ width: "100px", height: "100px", marginTop: "40px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      ></div>
      <div
        className="bg-C2A3D1 shadow-md rounded p-24 mb-4"
        style={{
          border: "solid 1px #C1C1C1",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            backgroundColor: "#C2A3D1",
          }}
          className="bg-C2A3D1 shadow-md rounded p-24 mb-4"
        >
          <Link to="/">
            <button
              style={{
                color: "#7F7F7F",
                position: "relative",
                top: "-50px",
                left: "-80px",
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
            Bienvenido
          </h1>
          <div className="mb-6">
            <input
              style={{ width: "300px" }}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="username"
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6" style={{ position: "relative" }}>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              <div>{showPassword ? "👁" : "👁️‍🗨️"}</div>
            </button>
          </div>
          <div className="mb-6 text-center">
            <button
              style={{ backgroundColor: "#7410A3", color: "white" }}
              className="w-full hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar Sesión
            </button>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "-20px", padding: "10px" }}
          >
            <a style={{ fontSize: ".8rem" }} className="text-white" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <p
            style={{ fontSize: ".8rem" }}
            className="text-center text-white text-xs"
          >
            ¿No tienes cuenta?{" "}
            <a className="text-blue-500 hover:text-gray-500" href="#">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
