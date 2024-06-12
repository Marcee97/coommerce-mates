import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/App.css";
import { Mates } from "./pages/Mates";
import { useEffect, useState } from "react";

export const App = () => {
  const [classNombre, setClassName] = useState("nav");
  const [menuClass, setMenuClass] = useState('menu-desplegable')
  const location = useLocation();
  const classNav = () => {
    setClassName(classNombre === "nav" ? "solid-toggle" : "nav");
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setClassName("nav");
    } else {
      setClassName("solid-toggle");
    }
  }, [location]);


  const classMenu = ()=> {
setMenuClass(menuClass === 'menu-desplegable' ? 'desplegado' : 'menu-desplegable')
console.log('messi')
  }

  return (
    <div>
      <Navbar classNombre={classNombre} classMenu={classMenu} />
      <Routes>
        <Route path="/" element={<Home classNav={classNav} menuClass={menuClass} />} />
        <Route path="/mates" element={<Mates />} />
      </Routes>
    </div>
  );
};
