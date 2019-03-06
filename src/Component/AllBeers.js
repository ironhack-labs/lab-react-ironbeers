import React from 'react';

const AllBeers = (props) =>{
  return(
    <div className="card">
      <img className="circle responsive-img"  src={props.beer.image_url} width="20" alt=""/>
        <h4 className="headerProf"> {props.beer.name}</h4>
        <h6>{props.beer.tagline}</h6>
        <p>{props.beer.contributed_by}</p>
    </div>
  )
};

export default AllBeers;