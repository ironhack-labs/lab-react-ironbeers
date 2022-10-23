import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Beers({ beers, callBackFetchData }) {
  useEffect(() => callBackFetchData(), [callBackFetchData]);

  return (
    <>
      {beers === null ? (
        <p>loading...</p>
      ) : (
        beers.map((beer) => {
          return (
            <NavLink key={beer._id} to={`/beers/${beer._id}`}>
              <div className="beer-list d-flex flex-row bd-highlight mb-3 align-items-center">
                <div className="p-2 bd-highlight">
                  <img src={beer.image_url} alt="" />
                </div>
                <div className="p-2 bd-highlight">
                  <h3>{beer.name}</h3>
                  <p className="grey-text">{beer.tagline}</p>
                  <p>
                    <small>Created by: {beer.name}</small>
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })
      )}
    </>
  );
}

export default Beers;
