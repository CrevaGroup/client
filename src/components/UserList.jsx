import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "Usuario1", isBlocked: false },
    { id: 2, username: "Usuario2", isBlocked: true },
  ]);

  const toggleUserBlockStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto bg-custom-gray p-4 rounded shadow-md my-8">
      <h3 className="text-dark-violet text-2xl font-semibold mb-2">
        Lista de Usuarios
      </h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-custom-blue text-lg">
                  {user.username}
                </span>
                <p className="text-black">
                  Estado: {user.isBlocked ? "Bloqueado" : "Desbloqueado"}
                </p>
              </div>
              <div>
                <button
                  onClick={() => toggleUserBlockStatus(user.id)}
                  className={`${
                    user.isBlocked
                      ? "bg-light-violet hover:bg-dark-gray-blue"
                      : "bg-dark-gray-blue hover:bg-light-violet"
                  } text-white px-2 py-1 ml-2 rounded-md focus:outline-none`}
                >
                  {user.isBlocked ? "Desbloquear" : "Bloquear"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
