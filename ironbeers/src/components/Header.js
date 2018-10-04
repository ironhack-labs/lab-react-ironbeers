import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">
        <div width="100%" style={{backgroundColor:"cyan"}}>
          <img height="50px" style={{padding:"10px"}} src="https://mbtskoudsalg.com/images/home-transparent-white-3.png" alt="" />
        </div>
      </Link>
    </div>
  );
};
