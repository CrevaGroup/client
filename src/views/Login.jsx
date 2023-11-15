import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flechaVolver from "../assets/flechaVolver.svg";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { getUser, googleLogin } from "../Redux/Actions/actions";
import imgLogin from "../assets/Mobile login-pana.png";
import imgGoogle from "../assets/LogosGoogleIcon.svg";
import eye from '../assets/eye.svg';
import eyeslash from '../assets/eye-slash.svg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "75vh",
        minHeight: "100vh",
        flexDirection: "column",
        // margin: "100px",
      }}
    >
      <style>
        {`
      @media (max-width: 768px) {
        .image-container {
          display: none;
        }
      }
    `}
      </style>
      {window.innerWidth > 768 ? (
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            width: "100%",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            className="image-container"
            style={{
              flex: 1,
              paddingRight: "20px",
            }}
          >
            <img
              src={imgLogin}
              alt="Imagen Ilustrativa"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#C2A3D1",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              border: "1px solid #C1C1C1",
              padding: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 auto 20px auto",
                display: "block",
              }}
            />
            <h1
              style={{ color: "white" }}
              className="text-2xl text-center font-bold mb-4"
            >
              Bienvenido
            </h1>
            <div style={{ textAlign: "left" }}>
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#7F7F7F",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "1.5rem",
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                  }}
                >
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src={flechaVolver}
                    alt=""
                  />
                </button>
              </Link>
            </div>
            <div className="mb-3">
              <input
                style={{ width: "100%" }}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3" style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                showPassword ? <img src={eye} className=" h-6 w-6" onClick={() => setShowPassword(!showPassword)}  style = {{
                  position: "absolute",
                    top: "50%",
                right: "10px",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
                }}></img> : <img src={eyeslash} className="h-6 w-6" onClick={() => setShowPassword(!showPassword)}  style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}></img>
              }
              
            </div>
            <div className="mb-3 text-center">
              <button
                style={{ backgroundColor: "#7410A3", color: "white" }}
                className="w-full hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  dispatch(getUser(email, password));
                  navigate("/");
                }}
              >
                Iniciar Sesión
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
              <img style={{ width: "30px" }} src={imgGoogle} alt="" />
              <button
                className="w-full text-white font-bold py-0 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  dispatch(googleLogin());
                  navigate("/");
                }}
              >
                Iniciar sesión con Google
              </button>
            </div>
            <div
              className="text-center"
              style={{ marginTop: "-20px", padding: "10px" }}
            >
              <p style={{ fontSize: ".8rem" }} className="text-white" href="#">
                ¿Olvidaste tu contraseña?
              </p>
            </div>
            <div
              className="flex items-center justify-center"
            >
              <p
                style={{ fontSize: ".8rem" }}
                className="text-center text-white text-xs mx-2"
              >
                ¿No tienes cuenta?{" "}
              </p>
              <Link to="/register">
                <p className="text-blue-500 hover:text-gray-500" href="#">
                  Regístrate aquí
                </p>
              </Link>
            </div>

          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            width: "100%",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#C2A3D1",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              border: "1px solid #C1C1C1",
              padding: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{ color: "white" }}
              className="text-2xl text-center font-bold mb-4"
            >
              Bienvenido
            </h1>
            <div style={{ textAlign: "left" }}>
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#7F7F7F",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "1.5rem",
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                  }}
                >
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src={flechaVolver}
                    alt=""
                  />
                </button>
              </Link>
            </div>
            <div className="mb-3">
              <input
                style={{ width: "100%" }}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3" style={{ position: "relative" }}>
              <input
                style={{ width: "100%" }}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                {
                  showPassword ? <img src={eye} className=" h-6 w-6" onClick={() => setShowPassword(!showPassword)} style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}></img> : <img src={eyeslash} className="h-6 w-6" onClick={() => setShowPassword(!showPassword)} style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}></img>
                }
            </div>
            <div className="mb-3 text-center">
              <button
                style={{ backgroundColor: "#7410A3", color: "white" }}
                className="w-full hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  dispatch(getUser(email, password));
                  navigate("/");
                }}
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="mb-3 text-center">
              <button
                style={{ backgroundColor: "#7410A3", color: "white" }}
                className="w-full hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  dispatch(googleLogin());
                  navigate("/");
                }}
              >
                Iniciar Sesión con Google
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
            <div
              className="flex items-center justify-center"
            > 
                <p
                  style={{ fontSize: ".8rem" }}
                  className="text-center text-white text-xs mx-2"
                >
                  ¿No tienes cuenta?{" "}
                </p>

                <Link to="/register">
                  <p className="text-blue-500 hover:text-gray-500 " href="#">
                    Regístrate aquí
                  </p>
                </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
