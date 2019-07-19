import React from "react";

import { Link } from 'react-router-dom';


function HomeHeader() {
  return (
    <div className="HomeHeader">
    <Link className="text-decoration-none link-text" to="/">
    <div className="d-flex justify-content-center align-items-center m-0 p-0" style={{backgroundColor: "rgb(49, 195, 255)", height: 100 }}><div>🏠</div></div>

    </Link>
    </div>
  )
}

export default HomeHeader;