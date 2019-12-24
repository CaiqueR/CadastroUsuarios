import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Routes from "./Routes";
import Footer from "../components/template/Footer/Footer";
import Logo from "../components/template/Logo/Logo";
import Nav from "../components/template/Nav/Nav";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
