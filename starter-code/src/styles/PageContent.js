import styled from 'styled-components';

// Home page
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 30%;
  border: 0.2em solid #f3d2c1;
  border-radius: 1em;
  overflow: hidden;
  margin: 3em 1em;

  div {
    padding: 1em;
    color: #001858;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #001858;
  }
`;

// Beers list
export const BeersContainer = styled(Container)`
  flex-wrap: wrap;
`;

export const ImgContainer = styled(Container)`
  width: 100%;
  height: 10em;
  img {
    object-fit: contain;
  }
`;

export const BeerCard = styled(Card)`
  height: fit-content;
`;

// Beer detail
export const BeerDetailCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  color: #172c66;
  width: 70%;
  margin: 0 auto;

  div.content {
    width: 100%;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  div.img-container {
    width: 100%;
    text-align: center;
    img {
      height: 30em;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
