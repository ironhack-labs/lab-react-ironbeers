import styled from 'styled-components';

// Home page
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 30%;
  border: 0.2em solid #f3d2c1;
  border-radius: 1em;
  overflow: hidden;
  margin: 2em 1em;
  div.content {
    padding: 1em;
    color: #001858;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #001858;
  }
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

// Beers list
export const ImgContainer = styled(Container)`
  width: 100%;
  height: 10em;
  flex-wrap: nowrap;
  img {
    object-fit: contain;
  }
`;

export const BeerCard = styled(Card)`
  height: fit-content;
  div {
    padding: 1em;
    color: #001858;
  }
  span {
    font-weight: 700;
  }
  p.light {
    color: #97ade7;
  }
`;

export const InputContainer = styled(Container)`
  padding: 2em;
  @media (max-width: 1024px) {
    padding: 2em 4.3em;
  }
  @media (max-width: 768px) {
    padding: 2em 3em;
  }
  @media (max-width: 425px) {
    padding: 2em 1em;
  }
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
  h3 {
    font-size: 1.5rem;
  }
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

  a {
    margin-top: 1em;
    border: 0.1em solid #f582ae;
    border-radius: 1em;
    text-decoration: none;
    color: #172c66;
    padding: 0.5em 1em;
    &:hover {
      background-color: #f582ae;
      color: #fff;
    }
  }
  span {
    color: #97ade7;
  }
  svg {
    vertical-align: bottom;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
