import {Fragment, React, useState} from 'react';
import { Link } from 'react-router-dom';

const Beers = ({beers, loading}) => {
   // state to manage search input
   const [searchInput, setSearchInput] = useState("");

   const handleChange = ({ target }) => {
     setSearchInput(target.value);
   };

    const beerCard = beers.filter(item => item.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))
    .map(item => {
      return (
        <div  key={item._id}>
          <Link className="beer-each-wrapper" to={`/beers/${item._id}`}>
            <img src={item.image_url} alt="country"/>
            <div>
              <h2>{item.name}</h2>
              <p>{item.tagline}</p>
              <p>Contributed by {item.contributed_by}</p>
            </div>
          </Link>
          </div>
      )
    })

  return (
    <Fragment>
    {loading && <p>Looking for your beers...</p> }
      <div className="beer-details-wrapper">
      <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search for a beer"
        value={searchInput} //update the value with whay it's typing for the user
        onChange={handleChange} 
      />
    </div>
        {beerCard}
      </div>
    </Fragment>
  )
}

export default Beers;