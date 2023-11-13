import React, { useEffect, useState } from "react";
import { RiDropboxFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import NewServices from "./NewServices";
import { useDispatch, useSelector } from "react-redux";
import { deleteServices, getServices, getTypes } from "../Redux/Actions/actions";

function MainDashboard() {

  const dispatch = useDispatch()

  const config = useSelector(state => state.config)
  const user = useSelector(state => state.user)
  const services = useSelector(state => state.services)
  const filters = useSelector(state => state.filters)

  useEffect(() => {
    dispatch(getServices(filters));
    dispatch(getTypes());
    
}, []);

  function deleteHandler (e){
    dispatch(deleteServices(e.target.value))
  }

  const [mostrarNuevoServicio, setMostrarNuevoServicio] = useState(false);

  const toggleNuevoServicio = () => {
    setMostrarNuevoServicio(!mostrarNuevoServicio);
  };
  const [closeSer, setCloseSer] = useState(false);
  const handleCloseSer = () => {
    setCloseSer(!closeSer);
  };
  return (
    <div className="p-12">
      <div>
        <div className="flex flex-col justify-center items-center  align-center">
          <button
            onClick={() => {
              handleCloseSer();
              toggleNuevoServicio();
            }}
            className="px-4 flex items-center gap-2 py-2 bg-purple-100 text-gray-700 rounded-lg mb-4"
          >
            Crear nuevo servicio
            {closeSer ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </button>
          <div
            className={`w-full md:-order-none transition-all duration-500 ease-in-out ${
              mostrarNuevoServicio
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}
          >
            <div className="relative">
              {mostrarNuevoServicio && <NewServices />}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-gray-400">
            Actualmente existen{" "}
            <span className="text-purple-500 font-semibold">{services?services.length:0}</span> servicios!
          </p>
        </div>
        {/* Card */}
        {services.map((service, index) => <div key={index}>
        <a
          className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg m-3 border-2 border-transparent hover:border-purple-400 transition-all"
          >
          <div className="w-full md:w-[70%]">
            {/* title */}
            <h1 className="text-xl flex items-center gap-4 mb-2">
              {service.name}{" "}
            </h1>
            <p className="text-gray-500 ">{service.description}</p>
          </div>
          {/* time */}
          <div className="w-full md:w-[20%] flex flex-col items-end ">
            <h3 className="text-xl text-gray-500 mb-2 ">${user.nacionalidad==="Argentina"?service.price*config.dolarValue:service.price} {user.nacionalidad==="Argentina"?"ARS":"USD"}</h3>
            <p className="text-gray-500">{service.createdAt.slice(0, 10).split("-").reverse().join("-")}</p>
          </div>
          <button value={service.id} onClick={deleteHandler}>Eliminar</button>
          {/* <button>Editar</button> */}
        </a>
        </div>)}
      </div>
    </div>
  );
}

export default MainDashboard;
