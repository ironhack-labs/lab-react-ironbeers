import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import BeerList from '../../components/BeerList/BeerList';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const getBeers = async () => {
    let findBeer;
    if (!search) {
      findBeer = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    } else {
      findBeer = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`
      );
    }
    const { data } = findBeer;
    setBeers(data);
    setLoading(true);
  };
  React.useEffect(() => {
    getBeers();
  }, []);
  React.useEffect(() => {
    getBeers();
  }, [search]);
  console.log(beers);
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <div>
      <NavBar />
      <div className="search">
        <input
          style={{ width: '90%' }}
          name="query"
          value={search}
          type="text"
          placeholder="Search beer..."
          onChange={handleChange}
        ></input>
      </div>

      {loading ? (
        beers.map((beer) => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <BeerList beer={beer}></BeerList>
            <hr></hr>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Beers;
