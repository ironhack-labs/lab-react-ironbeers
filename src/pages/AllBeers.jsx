import React from "react";
import beerImg from "../assets/beers.png";
import Navbar from "../components/Navbar";

function AllBeers(props) {
  return (
    <div>
      {/* <Navbar /> */}
      <img src={beerImg} alt="bartop" />
      <h1>All Beers</h1>
      <p>
        em hymenaeos molestie iusto eleifend adipiscing sodales doloribus ipsum
        euismod tempora litora ad vitae, vitae pariatur, veritatis. Curae,
        sapiente nunc, explicabo viverra torquent vel! Quisquam eligendi quod,
        dignissim eiusmod rutrum, wisi accusantium, aperiam harum, nostrud
        hymenaeos, litora sociis aliquam architecto modi? Platea tempora ante
        nihil!
      </p>
      {/* <p>{props.children}</p> */}
    </div>
  );
}

export default AllBeers;
