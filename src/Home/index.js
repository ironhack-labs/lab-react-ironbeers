import React from 'react';

import {
  Container,
  BeersContainer,
  Beers,
  RandomContainer,
  Random,
  NewContainer,
  New,
} from './style';

function Home() {
  return (
    <Container>
      <BeersContainer>
          <Beers />
      </BeersContainer>
      <RandomContainer>
        <Random />
      </RandomContainer>
      <NewContainer>
        <New />
      </NewContainer>
    </Container>
  );
}

export default Home;
