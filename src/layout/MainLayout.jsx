import React from "react";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
