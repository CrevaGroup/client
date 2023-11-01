import React from "react";
import Sidebar from "../components/Sidebar";
import Sales from "../components/Sales";
import CLients from "../components/CLients";
import { Routes, Route } from "react-router-dom";
import Transaction from "../components/Transaction";
import Users from "../components/Users";
import OrderRequest from "../components/OrderRequest";
import Config from "../components/Config";

function Admin() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="w-full p-4 bg-gray-100">
        <Routes>
          <Route path="/clients" element={<CLients />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/users" element={<Users />} />
          <Route path="/request" element={<OrderRequest />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
