import React, { useState } from "react";

const clientData = [
  {
    id: 1,
    name: "Cliente 1",
    email: "cliente1@example.com",
    phone: "123-456-7890",
    address: "Dirección de Cliente 1",
  },
  {
    id: 2,
    name: "Cliente 2",
    email: "cliente2@example.com",
    phone: "987-654-3210",
    address: "Dirección de Cliente 2",
  },
  {
    id: 3,
    name: "Cliente 3",
    email: "cliente3@example.com",
    phone: "555-555-5555",
    address: "Dirección de Cliente 3",
  },
];

export default function CLients() {
  const [selectedClient, setSelectedClient] = useState(clientData[0]);

  const handleClientSelection = (client) => {
    setSelectedClient(client);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Clientes</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Lista de Clientes</h3>
          <ul>
            {clientData.map((client) => (
              <li
                key={client.id}
                className="mb-2 cursor-pointer text-blue-500"
                onClick={() => handleClientSelection(client)}
              >
                {client.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Detalles del Cliente</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Nombre:</label>
              <p>{selectedClient.name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">
                Correo Electrónico:
              </label>
              <p>{selectedClient.email}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Teléfono:</label>
              <p>{selectedClient.phone}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Dirección:</label>
              <p>{selectedClient.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
