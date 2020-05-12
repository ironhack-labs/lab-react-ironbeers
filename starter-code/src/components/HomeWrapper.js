import React from "react";
import { Link } from "react-router-dom";
import "./HomeWrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDivide } from "@fortawesome/free-solid-svg-icons";
import Routes from "./Routes";


export default function HomeWrapper(props) {
  return (
    <div>
      <header className="App-header">
        <Link to="/">
            <FontAwesomeIcon className="Home-icon" icon={faHome} />
        </Link>
      </header>
      <Routes />
    </div>
  );
}