import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default MainLayout;
