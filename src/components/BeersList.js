import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import axios from 'axios';
import classes from './BeersList.module.css';

const BeersList = () => {
  const [beerList, setBeerList] = useState([]);
  const [filteredSearchList, setFilteredSearchList] = useState([]);

  const onSearchChange = (searchValue) => {
    setFilteredSearchList(
      beerList.filter((el) =>
        el.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const baseUrl = 'https://ih-beers-api2.herokuapp.com';
    const api = axios.create({ baseURL: baseUrl });
    async function fetchBeers() {
      const { data } = await api.get(`/beers`);
      setBeerList(data);
      setFilteredSearchList(data);
    }
    fetchBeers();
  }, []);

  let beerArr = [];

  if (beerList.length) {
    beerArr = filteredSearchList.map((beer) => (
      <li key={beer._id} className={classes.listItem}>
        <Link to={`/beers/${beer._id}`}>
          <img
            src={beer.image_url}
            className={classes.beerImage}
            alt={beer.name}
          />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </Link>
      </li>
    ));
  }
  return (
    <div className={classes.container}>
      <Search onSearchChange={onSearchChange} />
      <ul className={classes.beerList}>{beerArr}</ul>
    </div>
  );
};

export default BeersList;
