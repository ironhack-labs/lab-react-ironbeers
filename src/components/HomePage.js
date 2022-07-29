import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function HomePage() {
  return (
    <div className="HomeLinks">
      <Link  to="/beers">All Beers</Link> <br/>
      <Link  to="/random-beer">Random Beer</Link><br/>
      <Link  to="/new-beer">New Beer</Link><br/>
    </div>
  );
}

export default HomePage;
