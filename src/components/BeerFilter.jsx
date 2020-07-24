import React from 'react';

const BeerFilter = ({callback}) => {
  const handleChange = (event) => {
    let searchedBeer = event.target.value;
    console.log("searched beer input: " , searchedBeer);
    callback(searchedBeer)
  };

  return (
    <div>
      <label htmlFor="filter" className="text-content"></label>
      <input
        id="filter"
        type="text"
        className="filter"
        placeholder="type here"
        onChange={handleChange}
      />
    </div>
  );
};

export default BeerFilter;
