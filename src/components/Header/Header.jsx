import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
      <div className="header">
        <Link to="/">
          <FontAwesomeIcon icon={faHome}/>
        </Link>
      </div>
    );
}
