import React from "react";

const Profile = () => {
  const adminInfo = {
    name: "Nombre del Administrador",
    email: "admin@example.com",
    role: "Administrador",
    avatar: "URL de la imagen del avatar",
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <img
          src={adminInfo.avatar}
          alt="Avatar del Administrador"
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{adminInfo.name}</h3>
        <p className="text-gray-500">{adminInfo.email}</p>
        <p className="text-custom-violet">{adminInfo.role}</p>
      </div>
    </div>
  );
};

export default Profile;
