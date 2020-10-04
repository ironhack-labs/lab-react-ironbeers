import React from 'react';

const searchBeer = (props) => {
  const handleSrch = (evt) => {
    evt.target.name = evt.target.value;
    props.searchBeer(evt.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="srch_beer"
        className="form-control"
        placeholder="Enter name of beer to search"
        value={props.srch}
        onChange={handleSrch}
      />
    </div>
  );
};

export default searchBeer;
