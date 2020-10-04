// import packages
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import components
import Header from './Header'

const SingleBeer = (props) => {
  // state and setState method
  const [beer, setBeer] = useState({});

  // gets api url from parent component
  const { apiUrl } = props;

  useEffect(() => {
    let source = axios.CancelToken.source();

    (async () => {
      try {
        const response = await axios.get(`${apiUrl}/random`, { cancelToken: source.token });
        setBeer(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('cancel caught!');
        } else {
          console.error(err)
        }
      };

      return () => {
        console.log('unmounting')
        source.cancel();
      };
    })();
  }, [apiUrl]);

  return (
    <div>
      <Header />
      <div className='single-card'>
        <figure className='single-img'>
          <img alt={beer.name} src={beer.image_url} />
        </figure>
        <div className='single-content'>
          <header className='single-header'>
            <h3>{beer.name}</h3>
            <h3>{beer.attenuation_level}</h3>
          </header>
          <section className='single-section'>
            <p>{beer.tagline}</p>
            <small><b>{beer.first_brewed}</b></small>
          </section>
          <article className='single-article'>
            <p>{beer.description}</p>
          </article>
          <footer className='single-footer'>
            <small>{beer.contributed_by}</small>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default SingleBeer;