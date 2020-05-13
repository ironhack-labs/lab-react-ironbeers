import React from 'react';
import Header from '../Header/Header';
import "./ListBeer.css";

export default function ListBeer(props) {
    let beer = [];
    if (props.randomResult) { beer = props.randomResult } else {
    const apiRes =  props.location.state;
    const urlParam = props.match.params.beerId
    const [filteredResults] = apiRes.filter((filter) => urlParam === filter._id)
    beer = filteredResults
    }

    return (
      <div>
        <Header />
        <div className="list-container">
          <img src={beer.image_url} alt="" />
          <div className="list-row-elements">
            <span className="list-row-name">{beer.name}</span>
            <span className="list-row-att">{beer.attenuation_level}</span>
          </div>
          <div className="list-row-elements">
            <span className="list-row-tagline">{beer.tagline}</span>
            <span className="list-row-brewed">
              <strong>{beer.first_brewed}</strong>
            </span>
          </div>
          <div className="list-description">{beer.description}</div>
          <div className="list-contributed">
            <strong>{beer.contributed_by}</strong>
          </div>
        </div>
      </div>
    );
}
