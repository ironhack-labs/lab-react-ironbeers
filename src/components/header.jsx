import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import "../App.css";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "powderblue",
        height: "50px",
        fontSize: "50px",
        padding: "10px",
      }}
    >
      <nav>
        <BsFillHouseDoorFill />
      </nav>
    </div>
  );
}

export default Header;
