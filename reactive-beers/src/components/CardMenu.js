import React from "react";

const CardMenu = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={ props.image } alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{ props.title }</p>
          </div>
        </div>
        <div className="content">
          { props.description }
        </div>
      </div>
    </div>
  )
}

export default CardMenu;