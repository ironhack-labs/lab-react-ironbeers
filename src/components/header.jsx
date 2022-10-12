import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <nav className="navNav">
      <div
        className="navHouse"
        onClick={() => {
          navigate("/");
        }}
      >
        <BsHouseFill />
      </div>
    </nav>
  );
}

export default Header;
