import React from 'react';
import { Container, Icon, Button, Item, Input, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles/ListBeers.css';

const ListBeers = ({ beers, onSearch, onSubmit }) => {
  const itemContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '50px',
  };

  return (
    <Container text style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Item.Group divided>
        <Container floated="center">
          <Grid relaxed stackable>
            <Grid.Row>
              <Grid.Column
                width={8}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Input
                  name="keyWord"
                  type="text"
                  style={{ marginBottom: '30px' }}
                  action={{ icon: 'filter', color: 'green' }}
                  onChange={onSearch}
                  placeholder="Quick Filter"
                />
              </Grid.Column>
              <Grid.Column
                width={8}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <form onSubmit={onSubmit}>
                  <Input
                    name="keyWord"
                    type="text"
                    style={{ marginBottom: '30px' }}
                    action={{ icon: 'search', type: 'submit', color: 'green' }}
                    placeholder="Search"
                  />
                </form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        {beers.map((beer) => {
          return (
            <Item key={beer._id}>
              <Item.Image src={beer.image_url} className="listBeers__img" />
              <Item.Content style={itemContentStyle}>
                <Item.Header as={Link} to={`/beers/${beer._id}`} className="listBeers__title">
                  {beer.name}
                </Item.Header>
                <Item.Meta>
                  <span>{beer.contributed_by}</span>
                </Item.Meta>
                <Item.Description>{beer.tagline}</Item.Description>
                <Item.Extra>
                  <Link to={`/beers/${beer._id}`}>
                    <Button color="twitter" floated="right">
                      Read more
                      <Icon name="right chevron" />
                    </Button>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Container>
  );
};

export default ListBeers;
