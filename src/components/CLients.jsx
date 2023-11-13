import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUser } from "../Redux/Actions/actions";

export default function CLients() {
  // const [selectedClient, setSelectedClient] = useState("");

  const dispatch = useDispatch()
    const users = useSelector(state => state.allUsers)

    useEffect(()=>{

      dispatch(getAllUsers())
    },[])

  // const handleClientSelection = (client) => {
  //   setSelectedClient(client);
  // };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Clientes</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Lista de Clientes</h3>
          <ul>
            {users.map((client) => (
              <li
                key={client.id}
              >
                <div className="grid grid-cols-4">
                <p>{client.fullName}</p>
                <p>Email: <a target="blank" href={`mailto:${client.email}`}>{client.email}</a></p>
                <p>Nacionalidad: {client.nacionalidad}</p>
                {client.curriculum?<div>Curriculum: <a target="blank" href={client.curriculum}>Link</a></div>:null}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          <h3 className="text-lg font-semibold mb-2">Detalles del Cliente</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Nombre:</label>
              <p>{selectedClient.fullName}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">
                Correo Electrónico:
              </label>
              <p>{selectedClient.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Nacionalidad:</label>
              <p>{selectedClient.nacionalidad}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Compras:</label>
              <div>{selectedClient?.buys?.map((buy,index)=> <p key={index}>{buy.Services[0].name}</p>)}</div>
            </div>
            {selectedClient.curriculum?<div>
              <label className="text-sm text-gray-600">Curriculum:</label>
              <div><a target="blank" href={selectedClient.curriculum}>Link</a></div>
            </div>:null}
          </div>
        </div> */}
      </div>
    </div>
  );
}
