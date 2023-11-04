import React from "react";
import { Link, unstable_useViewTransitionState } from "react-router-dom";

function DashboardBar() {
  return (
    <div className="bg-dark-violet py-3">
      <ul className="flex justify-between space-x-4 px-4 text-white">
        <li className="">Tom Holland</li>
        <li className="">tomcito@gmail.com</li>
        <li className="">Suscripción de Plata</li>

        <Link to="/">
          <li className="cursor-pointer hover:underline">CV</li>
        </Link>
        <Link to="/subs">
          <li className="cursor-pointer hover:underline">
            Activar/Desactivar suscripción
          </li>
        </Link>
        <li className="cursor-pointer hover:underline">Editar</li>
        <li className="cursor-pointer hover:underline">Eliminar</li>
      </ul>
    </div>
  );
}

export default DashboardBar;
