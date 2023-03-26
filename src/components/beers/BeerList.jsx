import React from 'react';
import Beer from './Beer';

const BeerList = ({beers}) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3"> 
      {beers.map(beer => (
        
        <div key={beer._id} className="col mb-3"> 
        <Beer {...beer} />
        </div>
      ))}
    </div>
    );
};

export default BeerList;