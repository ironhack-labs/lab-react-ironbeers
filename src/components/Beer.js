import React from 'react';

const Beer = (props) => {
  return (
    <div className="container">
      <h2>Beer {props.name}</h2>
      <p>{props.tagline}</p>
    </div>
  )
}
export default Beer;