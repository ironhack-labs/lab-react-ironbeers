import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BeersContext } from "../contexto/beers.Context";
import { Loading } from "../../lib/Loading";
import { BeersListItem } from "../../public/styles/ListPage";

export const ListPage = () => {
  const { beers } = useContext(BeersContext);

  if (beers.length == 0) return <Loading />;

  return (
    <ul>
      {beers.map((beer, i) => (
        <BeersListItem key={i}>
          <Link to={`/details-beer/${beer._id}`}>
            <div className="box-img">
              <img src={beer.image_url} title={beer.name} alt={beer.name} />
            </div>
            <div className="box-contain">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p className="special-p">
                Created by: <span>{beer.contributed_by}</span>
              </p>
            </div>
          </Link>
        </BeersListItem>
      ))}
    </ul>
  );
};
