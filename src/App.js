import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Notes from "./components/Notes/Notes";
import Supporters from "./components/Supporters/Supporters";
import Telegram from "./components/Telegram/Telegram";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import "./hamburgers.min.css"
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Landing />
      <Notes />
      <Supporters />
      <Team  />
      <Telegram  />
      <Footer  />
    </Router>
  );
}

export default App;
