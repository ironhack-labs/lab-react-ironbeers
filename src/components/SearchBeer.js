import React  from 'react';

export default ({ onSearch }) => (

  <input className="input search" type="text" placeholder="Search" onChange={(event) => onSearch(event.target.value)}/>
)