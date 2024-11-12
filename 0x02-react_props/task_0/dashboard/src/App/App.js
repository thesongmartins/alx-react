import React from "react";
import "./App.css";
import logo from "../assets/holberton-logo.jpg";
import { getFooterCopy, getFullYear } from "../utils/utils";
import Login from "../../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function App() {
  return (
    <div classname="App">
      <div className="App-body">
        <Header />
        <Notifications />
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
