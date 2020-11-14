import React, { Component } from 'react';
import "./BeerDetail.css"

function BeerDetail({ eachDetail }) {
  console.log(eachDetail);
  return (
    <div className="detailPage">
      <div className="img_beer_details">
        <img src={eachDetail.image_url} alt="image" />
      </div>
      <div className="allDetails">
      <div className="details_section">
        <div className="names">
          <h2>{eachDetail.name}</h2>
          <h4 className="greyText">{eachDetail.tagline}</h4>
        </div>
        <div className="numbers">
          <h3 className="greyText">{eachDetail.ebc}</h3>
          <strong><p className="smallText">{eachDetail.first_brewed}</p></strong>
        </div>
      </div>
      <div>
        <p>{eachDetail.description}</p>
      </div>
      <div className="smallText">
        <strong><p>{eachDetail.contributed_by}</p></strong>
      </div>
      </div>
    </div>
  );
}

export default BeerDetail;
