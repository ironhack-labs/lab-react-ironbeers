import React from "react";
import Section from "./MainSection";

const images = {
  allbeers:
    "https://static.vinepair.com/wp-content/uploads/2018/11/bestbeers2018_header.jpg",
  randombeers:
    "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/o4emyrzxhfedgzkuebzl",
  newbeer:
    "https://www.tripsavvy.com/thmb/pG9bnzT5dm6liGEKhvhUQryeyCY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-555859471-592bba593df78cbe7ed05d1a.jpg"
};

const HomePage = props => {
  return (
    <div className="container">
      <Section image={images.allbeers} direction="/beers" title="All Beers" />
      <Section
        image={images.randombeers}
        direction="/random-beers"
        title="Random Beers"
      />
      <Section image={images.newbeer} direction="/new-beer" title="New Beer" />
    </div>
  );
};

export default HomePage;
