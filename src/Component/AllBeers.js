import React from 'react';

const AllBeers = (props) =>{
  return(
    <div className="card">
      <img className="circle responsive-img"  src={props.beer.image_url} width="20" alt=""/>
        <h3 className="headerProf"> {props.beer.name}</h3>
          <h4>{props.beer.tagline}</h4>
          <h5>{props.beer.first_brewed}</h5>
          <h5>{props.beer.atenuation_level}</h5>
        <p>{props.beer.description}</p>
      <h5>{props.beer.contributed_by}</h5>
    </div>
  )
}

export default AllBeers;