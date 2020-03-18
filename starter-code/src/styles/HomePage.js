import styled from 'styled-components';

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
