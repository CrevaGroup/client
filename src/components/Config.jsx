import React, { useState } from "react";

function Config() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Función para manejar los cambios en los campos del perfil
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Función para guardar los cambios del perfil (puedes personalizar esto)
  const saveProfileChanges = () => {
    // Aquí pueden agregar la lógica para guardar los cambios en el perfil
    // Por ejemplo, puedes enviar los datos al servidor
    // o almacenarlos en el almacenamiento local del navegador.
    // En este ejemplo, solo mostramos los datos en la consola.
    console.log("Perfil actualizado:", profileData);
  };

  return (
    <div>
      <h2>Configuración de Perfil</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-600">
            Nombre:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileData.firstName}
            onChange={handleProfileChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-600">
            Apellido:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileData.lastName}
            onChange={handleProfileChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileData.email}
            onChange={handleProfileChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="button"
          onClick={saveProfileChanges}
          className="bg-dark-violet text-white px-4 py-2 rounded-md"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default Config;
