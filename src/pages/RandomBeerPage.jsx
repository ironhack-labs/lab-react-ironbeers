import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function BeerDetails() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        setRandomBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <section>
        <div className='beer-img'>
          <img src={randomBeer.image_url} alt='beer' />
        </div>
        <div className='beer-info'>
          <div className='first-container row-container'>
            <h1>{randomBeer.name}</h1>
            <p>{randomBeer.attenuation_level}</p>
          </div>
          <div className='second-container row-container'>
            <h4>{randomBeer.tagline}</h4>
            <h4>{randomBeer.first_brewed}</h4>
          </div>
          <div className='third-container'>
            <p className='description'>{randomBeer.description}</p>
            <h6>{randomBeer.contributed_by}</h6>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  section {
    width: 100vw;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section .beer-img {
    margin-top: 60px;
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 120px;
    height: 300px;
  }
  section .beer-info {
    margin-top: 20px;
    width: 85%;
    max-width: 450px;
    height: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 20px;
  }
  section .beer-info .row-container {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description {
    margin-bottom: 10px;
  }
`;

export default BeerDetails;
