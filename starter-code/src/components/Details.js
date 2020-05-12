import React from "react";
import "./Details.css";
// import beers from "../services/BeersDS.json";

export default function Details({image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by}) {
    return (
      <div className="detailMainDiv">
        <div>
          <img src={image_url} className="detailPhoto" />
        </div>
        <div>
          <div className="detailName">{name}</div>
          <div className="detailAttenuationLevel">{attenuation_level}</div>
        </div>
        <div className="clearDiv" />
        <div>
          <div className="detailTagline">{tagline}</div>
          <div className="detailFirstBrewed">{first_brewed}</div>
        </div>
        <div className="clearDiv" />
        <div className="detailDescription">{description}</div>
        <div className="detailContributedBy">{contributed_by}</div>
      </div>
    );
}
