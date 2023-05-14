import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Disciplines from "./components/Disciplines";
import About from "./components/About";
import Register from "./components/auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/disciplines" element={<Disciplines />} />
    </Routes>
  );
}

export default App;
