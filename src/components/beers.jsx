import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListBeers() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://ih-beers-api2.herokuapp.com/beers');

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div >
      {items.map((beer ,i) => (
              
              <div className="mt-5"  key={i}>
              <img src={beer.image_url} alt="Beer picture" />
              <h2 className="mt-4" >{beer.name}</h2>
              <h3 className="mt-2">{beer.tagline}</h3>
              <h4 className="mt-2">{beer.contributed_by}</h4>
              <h2><Link to={'/beers/:${beer._id}'}>Check the details of each beer</Link></h2>
            </div>
      ))}
    </div>
  );
}

export default ListBeers;
/*
https://ih-beers-api2.herokuapp.com/beers

You should display the following from each of the beers:

    image
    name
    tagline
    contributed_by
    Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId.


*/

/*

<div className="card mb-3" style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.image_url} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.tagline}</p>
        <p className="card-text"><small class="text-muted">{item.contributed_by}</small></p>
        <h2><Link to={'/beers/:beerId'}>Check the details of each beer</Link></h2>
      </div>
    </div>
  </div>
</div>


*/
