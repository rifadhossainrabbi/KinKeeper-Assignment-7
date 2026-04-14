import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer autoClose={1000} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;