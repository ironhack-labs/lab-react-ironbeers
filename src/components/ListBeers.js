import React from "react";
import "./ListBeers.css";
import { NavLink } from "react-router-dom";

export default function ListBeers(props) {
  props.displayHeader(true);

  return (
    <div className="ListContainer">
      {props.beers.map((e) => {
        return (
          <NavLink key={e._id} className="Link" to={`/beers/${e._id}`}>
            <div className="Tile">
              <div className="ImgWrap">
                <img className="Img" src={e.image_url} alt={e.name} />
              </div>
              <div className="Text">
                <h2>{e.name}</h2>
                <div>
                  <p className="TagLine">{e.tagline}</p>
                </div>
                <div>
                  <p className="Contributed">{e.contributed_by}</p>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}
