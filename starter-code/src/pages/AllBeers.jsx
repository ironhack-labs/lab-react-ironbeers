import React from "react";
import SingleBeer from "../components/SingleBeer";

export default function AllBeers({ beers, handleSearch }) {
  return (
    <>
      <h1 className="mb-5">All Beers</h1>
      <input className="form-control mb-4" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
      {!beers.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {beers.map((el, i) => (
              <div className="col" key={i}>
                <SingleBeer data={el} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
