import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navigation.css";

function Navigation() {
  const navigate = useNavigate();
  return (
    <header onClick={() => navigate("/")}>
      <nav>HOME</nav>
    </header>
  );
}

export default Navigation;
