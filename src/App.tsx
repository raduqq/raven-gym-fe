import { Routes, Route } from "react-router";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import Disciplines from "./components/pages/Disciplines";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import Students from "./components/pages/Students";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disciplines" element={<Disciplines />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </>
  );
}

export default App;
