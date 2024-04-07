import React from 'react';
import Login from '../components/Login'
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';

const LoginPage = () => {
  return (

    <div className="login-page">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;