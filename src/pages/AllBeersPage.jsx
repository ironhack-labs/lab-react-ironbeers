import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AllBeersPage({ beers }) {
  return (
    <Wrapper>
      <h1>Our Beers</h1>
      <div className='outlined'></div>
      {beers.map((beer) => {
        return (
          <section key={beer.name}>
            <div className='beer-img'>
              <img src={beer.image_url} alt='beer' />
            </div>
            <div className='beer-info'>
              <Link className='heading-two' to={`/beers/${beer.name}`}>
                {beer.name}
              </Link>
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
    margin: 10px 0 10px 0;
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
  .beer-info .heading-two {
    font-size: 25px;
    font-weight: 800;
    color: #56382d;
    text-decoration: none;
  }
  .beer-info p {
    margin: 15px 0;
    color: #bf2a2e;
    font-size: 20px;
    text-shadow: 1px 1px #bf2a2e;
  }
`;

export default AllBeersPage;
