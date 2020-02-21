import React from "react";
import { Link } from "react-router-dom";
import HomeBox from "../components/HomeBox";

export default function Home() {
  return (
    <div>
      <Link to="/beers">
        <HomeBox image="../../images/beers.png" title="All Beers">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            voluptas alias doloremque similique itaque in neque, officia, quas
            recusandae qui aperiam aut doloribus molestias velit culpa repudiandae
            sed repellat voluptates!
        </HomeBox>
      </Link>
      <Link to="/random-beer">
        <HomeBox image="../../images/new-beer.png" title="Random Beer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            voluptas alias doloremque similique itaque in neque, officia, quas
            recusandae qui aperiam aut doloribus molestias velit culpa repudiandae
            sed repellat voluptates!
        </HomeBox>
      </Link>
      <Link to="/newbeer">
      <HomeBox image="../../images/random-beer.png" title="New Beer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptas alias doloremque similique itaque in neque, officia, quas
        recusandae qui aperiam aut doloribus molestias velit culpa repudiandae
        sed repellat voluptates!
      </HomeBox>
      </Link>
    </div>
  );
}
