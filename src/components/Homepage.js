import React from 'react';
import OptionCard from './OptionCard';
import { Container, Row, Col } from 'react-bootstrap';

const Homepage = () => {
  const cards = [
    {
      link: '/beers',
      image:
        'https://images.unsplash.com/photo-1527443631444-cfeaa17b56fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'All Beers',
      description: 'Find out our list of beers',
    },
    {
      link: '/random-beer',
      image:
        'https://images.unsplash.com/photo-1577486402877-f2672df20327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      title: 'Random Beer',
      description: 'Discover one random beer at a time',
    },
    {
      link: '/new-beer',
      image:
        'https://images.unsplash.com/photo-1577101790916-9615a273bdcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      title: 'New Beer',
      description: 'Add a new beer to the list',
    },
  ];
  const cardsList = cards.map((button, index) => (
    <OptionCard
      key={index}
      link={button.link}
      image={button.image}
      title={button.title}
      description={button.description}
      cta={button.cta}
    />
  ));
  return (
    <Container>
      <Row>
        <Col lg={12}>{cardsList}</Col>
      </Row>
    </Container>
  );
};

export default Homepage;
