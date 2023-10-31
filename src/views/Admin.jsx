import React from "react";
import UserList from "../components/UserList";
import ProductList from "../components/ProductList";
import Profile from "../components/Profile";
import AdminPanel from "../components/AdminPanel";

const AdminView = () => {
  return (
    <div className="max-w-8xl mx-auto mt-8 p-4 lg:p-8 bg-white rounded-lg shadow-md">
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <AdminPanel />
        </div>
        <div className="lg:w-3/4">
          <h2 className="text-5b117e text-3xl font-semibold mb-4">
            Panel de Administrador
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg bg-light-violet shadow-md">
              <h3 className="text-dark-violet text-xl font-semibold mb-4">
                Usuarios
              </h3>
              <UserList />
            </div>
            <div className="border p-4 rounded-lg bg-light-violet shadow-md">
              <h3 className="text-dark-violet text-xl font-semibold mb-4">
                Productos
              </h3>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
