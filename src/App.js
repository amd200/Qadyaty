import React from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Notes from "./components/Notes/Notes";
import Supporters from "./components/Supporters/Supporters";
import Telegram from "./components/Telegram/Telegram";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import "./hamburgers.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Landing />
      <Notes />
      <Supporters />
      <Team />
      <Telegram />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
