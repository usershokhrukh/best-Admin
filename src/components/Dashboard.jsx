import React from "react";
import Sidebar from "./Sidebar";
import "../assets/block/dashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard__right">
        <nav className="navbar"></nav>
        <main className="main"></main>
      </div>
    </div>
  );
};

export default Dashboard;
