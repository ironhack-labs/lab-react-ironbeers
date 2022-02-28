import React from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import Search from "./Search";

function AllBeers(props) {
const {beersList} = props;

const renderAllBeers = () => {
  return beersList.map((beerObj) => {
    return (
      <div className="beer-container" key={beerObj._id}>
        <div className="beer-image-box">
          <img src={beerObj.image_url} alt={beerObj.name + "image"} />
        </div>
        <div className="beer-description">
          <Link to={`/beers/${beerObj._id}`} className="beer-name-link">
            <h2>{beerObj.name}</h2>
          </Link>
          <h3>{beerObj.tagline}</h3>
          <p>
            <strong>Created by: </strong>
            {beerObj.contributed_by}
          </p>
        </div>
      </div>
    );
  })
}
  return (
    <div>
      <Header />
      <Search handleSearchInput={props.handleSearchInput}
        searchInput={props.searchInput}/>
      {beersList.length === 0 ? (
        <Spinner/>
      ) : renderAllBeers()}
    </div>
  );
}

export default AllBeers;
