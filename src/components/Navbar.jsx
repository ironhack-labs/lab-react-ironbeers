import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" className="d-flex justify-content-center">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
