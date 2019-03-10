import React from "react";
import { Link } from "react-router-dom"


const BeerItem = (props) => (
    <Link to={`beers/${props._id}`}>
      <div className="box is-marginless has-padding-5 card-beer">
        <article className="media">
          <div className="media-left">
            <figure className="image is-32x32 has-margin-15">
              <img src={props.image_url} className="" alt=""/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p className="title is-5 has-padding-bottom-5">{props.name}</p>
              <p className="subtitle is-6 has-text-grey">{props.tagline}</p>
              <small className=""><strong>Created by: </strong>{props.contributed_by}</small>
            </div>
          </div>
        </article>
      </div>
    </Link>
)

export default BeerItem;
