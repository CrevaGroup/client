import React from "react";
import { Link, unstable_useViewTransitionState } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{ fontSize: "1rem", background: "#C2A3D1" }}
      className="bg-C2A3D1 text-dark-violet w-1/1 p-4"
    >
      <div className="h-full  flex flex-col justify-between">
        <ul className="mb-auto">
          <Link to="/profile" className="text-white-100 hover:text-white-900">
            <li
              style={{
                width: "120px",
                borderRadius: "8px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="p-2 mb-6 bg-custom-gray"
            >
              <svg
                class="h-8 w-8 text-dark-violet"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Perfil
            </li>{" "}
          </Link>
          <Link to="/sales" className="text-white-100 hover:text-white-900">
            <li
              style={{
                width: "120px",
                borderRadius: "8px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="p-2 mb-6 bg-custom-gray"
            >
              <svg
                class="h-8 w-8 text-dark-violet"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="3" y1="21" x2="21" y2="21" />{" "}
                <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />{" "}
                <path d="M5 21v-10.15" /> <path d="M19 21v-10.15" />{" "}
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
              </svg>
              Ventas
            </li>{" "}
          </Link>
          <Link to="/clients" className="text-white-100 hover:text-white-900">
            <li
              style={{
                width: "120px",
                borderRadius: "8px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="p-2 mb-6 bg-custom-gray"
            >
              <svg
                class="h-8 w-8 text-dark-violet"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Clientes
            </li>{" "}
          </Link>
          <Link
            to="/transaction"
            className="text-white-100 hover:text-white-900"
          >
            <li
              style={{
                width: "120px",
                borderRadius: "8px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className=" p-2 mb-6 bg-custom-gray"
            >
              <svg
                class="h-8 w-8 text-dark-violet"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="7" y="9" width="14" height="10" rx="2" />{" "}
                <circle cx="14" cy="14" r="2" />{" "}
                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
              </svg>
              Transacciones
            </li>{" "}
          </Link>
          <Link to="/users" className="text-white-100 hover:text-white-900">
            <li
              style={{
                width: "120px",
                borderRadius: "8px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="p-2 mb-6 bg-custom-gray"
            >
              <svg
                class="h-8 w-8 text-dark-violet"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
                <circle cx="12" cy="7" r="4" />
              </svg>
              Usuarios
            </li>{" "}
          </Link>
          <Link to="/request" className="text-dark-violet">
            <li
              style={{
                width: "120px",
                borderRadius: "8px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              className="p-2 mb-6 bg-custom-gray"
            >
              <svg
                class="h-8 w-8 text-dark-violet"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                <line x1="4" y1="12" x2="20" y2="12" />{" "}
                <line x1="12" y1="4" x2="12" y2="20" />
              </svg>
              Solicitudes de Orden
            </li>{" "}
          </Link>
        </ul>
        <Link to="/config" className="text-white-100 hover:text-white-900">
          <div
            style={{
              width: "120px",
              borderRadius: "8px",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
            <svg
              class="h-8 w-8 text-dark-violet"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
              <circle cx="12" cy="12" r="3" />
            </svg>
            Configuración
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
