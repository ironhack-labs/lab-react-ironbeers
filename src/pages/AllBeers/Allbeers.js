import React from 'react';
import { Link } from 'react-router-dom';

function AllBeers({ beersList }) {
  return (
    <div className="list-group list-group-flush">
     {!beersList ? <h1>...Loading</h1> : 
        beersList.data.map((item, idx) => (
        <Link key={item._id} to={`/${item._id}`}>
        <div style={{display:"flex",alignItems:"center"}} key={item._id} className="list-group-item">
          <div style={{margin:"20px"}}>
            <img style={{maxWidth:"15vw"}} alt={item.name} src={item.image_url} />
          </div>
          <div style={{margin:"50px auto"}}>
            <h3 style={{fontSize:"8vw"}}>{item.name}</h3>
            <p style={{fontSize:"4vw"}}>{item.tagline}</p>
            <p style={{fontSize:"4vw"}}><strong>Created by:</strong>{item.contributed_by}</p>
          </div>
        </div>
        </Link>
      ))
     }
    </div>
  );
}

export default AllBeers;
