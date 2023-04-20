import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

function BeersList() {
  const { state } = useLocation(); // state passado na homepage para o Card
  const [beers, setBeers] = useState(state);

  const handleChange = async (e) => {
    const text = e.target.value;

    if (text) {
      const res = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${text}`,
      );

      const filteredBeers = await res.json();
      setBeers(filteredBeers); //resultado da chamada pra API: atualiza o state com o resultado da API
    } else {
      setBeers(state); //qdo nao tiver texto, mostra todas as cervejas (que é o state inicial.)
    }
  };

  return (
    <div>
      <Header />
      <div>
        <label>Search a beer:</label>
        <input onChange={handleChange} type='text' />
      </div>
      <div>
        {!beers.length ? (
          <h4>No beers to show 📭. GET the data from the API!</h4>
        ) : (
          beers.map((beer) => (
            <Link
              className='link-card'
              key={beer._id}
              to={'beerDetails'}
              state={beer}
            >
              <div className='card'>
                <img width={80} src={beer.image_url} alt='beer' />
                <div className='card-info'>
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
              <hr />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BeersList;
