import React from "react";
import GetTheBeers from "../components/GetTheBeers"
import Navbar from "./partials/navbar"

export default function Home() {
  return (
    <div className="page">
    
      <h1 className="title">HOME</h1>
      <Navbar />
      <GetTheBeers />
    </div>
  );
}
