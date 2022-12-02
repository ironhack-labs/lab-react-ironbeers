import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function AllBeersPage() {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log(res.data);
        setBeersList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>Our Beers</h1>
      <div className='outlined'></div>
      {beersList.map((beer) => {
        return (
          <section>
            <div className='beer-img'>
              <img src={beer.image_url} alt='beer image' />
            </div>
            <div className='beer-info'>
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <h5>Contributed by: {beer.name}</h5>
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  h1 {
    text-align: center;
    margin: 10px 0 5px 0;
    color: #53001d;
    text-shadow: 1px 1px #000;
  }
  section {
    margin: 0 15px;
    border-top: 1px dotted #56382d;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: calc(100vw - 30px);
    height: 30vh;
  }
  .beer-img {
    margin-right: 25px;
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 25vh;
  }
  .beer-info h2 {
    margin-bottom: 15px;
    color: #56382d;
  }
  .beer-info p {
    margin-bottom: 15px;
    color: #bf2a2e;
    font-size: 20px;
    text-shadow: 1px 1px #bf2a2e;
  }
`;

export default AllBeersPage;
