import React from "react";
import Sidebar from "../components/Sidebar";
import Sales from "../components/Sales";
import CLients from "../components/CLients";
import { Routes, Route } from "react-router-dom";
import Transaction from "../components/Transaction";
import Users from "../components/Users";
import OrderRequest from "../components/OrderRequest";
import Config from "../components/Config";
import ProfileUser from "../components/ProfileUser";
import UserList from "../components/UserList";
import ChartComponent from "../components/ChartComponent";

import Subscription from "../components/Subscription";

function Admin() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="w-full p-4 bg-gray-100">
        <UserList />

        <Routes>
          <Route path="/chart" element={<ChartComponent />} />
          <Route path="/" element={<ProfileUser />} index />
          <Route path="/subs" element={<Subscription />} />
          <Route path="/profile" element={<ProfileUser />} />
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
