import React from "react";
import Sidebar from "./Sidebar";
import "../assets/block/dashboard.scss";
import Table from "./Table";
import { Outlet, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Users from "./Users";
import Cars from "./Cars";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <hr className="dashboard__hr none" />
      <Sidebar />
      <div className="dashboard__right">
        <nav className="dashboard__navbar">
          <h2 className="dashboard__title">Best Admin</h2>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/products" element={<Products/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/cars" element={<Cars/>}/>
            <Route path="*" element={<h2 style={{color: "white"}}>Not Found</h2>}/>
          </Routes>
          {/* <Table/> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
