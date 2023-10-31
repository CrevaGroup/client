import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="flex">
      <div className="bg-custom-gray w-full p-4 rounded-lg shadow-md">
        <h2 className="text-dark-violet text-2xl font-semibold mb-4">
          Panel de Control
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg
              class="h-8 w-8 text-gray-500"
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
            <Link
              to="/orden"
              className="text-5b117e hover:underline hover:text-7411a2"
            >
              Orden
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              class="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <Link
              to="/solicitud"
              className="text-5b117e hover:underline hover:text-7411a2"
            >
              Solicitud
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              class="h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />{" "}
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <Link
              to="/Productos"
              className="text-5b117e hover:underline hover:text-7411a2"
            >
              Productos
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              class="h-8 w-8 text-gray-500"
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
              <circle cx="12" cy="12" r="9" />{" "}
              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />{" "}
              <path d="M12 6v2m0 8v2" />
            </svg>
            <Link
              to="/transaccion"
              className="text-5b117e hover:underline hover:text-7411a2"
            >
              Transacción
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              class="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <Link
              to="/usuarios"
              className="text-5b117e hover:underline hover:text-7411a2"
            >
              Usuarios
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4"></div>
    </div>
  );
};

export default AdminPanel;
