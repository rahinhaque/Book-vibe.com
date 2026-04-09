import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import { Outlet } from "react-router";

const Mainlayouts = () => {
  return (
    <div className="bg-linear-to-br from-[#0d0d1a] via-[#1a0a2e] via-[#0f1f3d] to-[#001a10] min-h-screen relative overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayouts;
