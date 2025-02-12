// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../pages/shared/Navbar";
// import Footer from "../pages/shared/Footer";

// const MainLayout = () => {
//   return (
//     <div className="max-w-7xl mx-auto">
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default MainLayout;
import React from "react";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
