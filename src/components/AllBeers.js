import React from 'react';

function AllBeers() {
  
  
    Allbeers.map(eachBeer => {
      return (
        <div key={eachBeer._id}>
          <h2>{eachBeer.name}</h2>
          <h4>{eachBeer.tagline}</h4>
          <img src={eachBeer.image_url} alt='the beer' />
           <h2>contributed_by</h2>
          {eachBeer.contributed_by}
        </div>
      );
    });
  };

 

export default AllBeers;