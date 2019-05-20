import React from "react";
import NavBar from "../common/NavBar";
import BeerCard from "./BeerCard";

const AllBeers = ({ beers, ...props }) => {
  const areBeers = beers.length > 0 ? true: false;

  return (
    <div>
      <NavBar />
      {areBeers && (
        <section className="uk-section">
          <div className="uk-container uk-container-large">
            <div
              className="uk-child-width-1-1@s uk-child-width-1-3@m uk-child-width-1-5@l uk-grid-small uk-grid-match" 
              uk-grid="true"
            >
              {beers.map((beer,index)=><BeerCard key={index} {...beer}/>)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AllBeers;