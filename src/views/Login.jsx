import React, { useState } from "react";
import { Link } from "react-router-dom";
import flechaVolver from "../assets/flechaVolver.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Agrega la lógica de inicio de sesión aquí
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
          padding: "25px 70px 25px 70px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            backgroundColor: "#C2A3D1",
            width: "400px",
            height: "370px",
          }}
          className="bg-C2A3D1 shadow-md rounded p-8  mb-4"
        >
          {" "}
          <Link to="/">
            <button
              style={{
                color: "#7F7F7F",
                position: "relative",
                top: "-20px",
                left: "-30px",
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
            </button>{" "}
          </Link>
          <h1
            style={{ color: "white" }}
            className="text-2xl text-center font-bold mb-4"
          >
            Bienvenido
          </h1>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 text-center">
            <button
              style={{ backgroundColor: "#7410A3", color: "white" }}
              className="w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
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
            className=" text-center text-white text-xs"
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
