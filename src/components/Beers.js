import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Beer from './Beer';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      setBeers(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((res) => {
        setBeers(res.data);
        setLoading(false);
      });
  }, [search]);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="Beers container">
      <Header />
      <h3 className="form-label">
        <b>Search Beer</b>
      </h3>
      <form className="box">
        <input
          placeholder="Beer name"
          className="input mb-2 form-control text-center"
          value={search}
          type="search"
          onChange={onSearch}
        />
      </form>
      {loading ? (
        'Loading'
      ) : beers.length === 0 ? (
        <h5>No beers found</h5>
      ) : (
        beers.map((beer) => {
          return <Beer key={beer._id} beer={beer} />;
        })
      )}
    </div>
  );
};

export default Beers;
