import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Mates } from "./pages/Mates";
import { Accesorios } from "./pages/Accesorios";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mates" element={<Mates />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>
    </div>
  );
};
