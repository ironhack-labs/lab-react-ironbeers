import React from "react";
import { Link } from "react-router-dom"

const CardMenu = (props) => {
  
  const formatedProps = (props) => {
    props.title = `${props.title.slice(0, 25)} ...`;
    props.description = `${props.description.slice(0, 200)} ...`;
  }

  //formatedProps(props);
  
  return (
    <Link to={ props.path }>
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
    </Link>
  )
}

export default CardMenu;