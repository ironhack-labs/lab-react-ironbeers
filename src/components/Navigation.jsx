import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navigation.css";
import homeIcon from "../assets/icons8-home-96.png";

function Navigation() {
  const navigate = useNavigate();
  return (
    <header onClick={() => navigate("/")}>
      <nav>
        <img className="home-icon" src={homeIcon} alt="home icon" />
      </nav>
    </header>
  );
}

export default Navigation;
// <a target="_blank" href="https://icons8.com/icon/83326/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
