import React from 'react'; 
const BeerLink = ({title, text, image}) => {

  return (
    <div className="card">
      <img src={image} alt="beer" width="100%"/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

export default BeerLink;