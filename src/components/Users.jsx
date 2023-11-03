import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const sampleUsers = [
        { id: 1, name: "Usuario 1" },
        { id: 2, name: "Usuario 2" },
        { id: 3, name: "Usuario 3" },
      ];

      setUsers(sampleUsers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
