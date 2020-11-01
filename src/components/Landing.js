import React from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Container,
  List,
  Image,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './styles/Landing.css';

const Landing = () => {
  return (
    <>
      <Container>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" className="landing__title">
                  All Beers
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="https://assets.visitmilwaukee.org/visitmke/media/global/Partner%20Images/Gallery%20Size/VM-ThirdSpaceBrewing-Beers.jpg?ext=.jpg&mode=crop&width=1920&height=1080&scale=both"
                  className="landing__img"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Link to="/beers">
                  <Button color='twitter' size="huge">Check All Beers</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" className="landing__title">
                  Which beer do you want?
                </Header>
                <p
                  style={{
                    fontSize: '1.33em',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    bordered
                    rounded
                    size="large"
                    src="https://www.piedmont.org/media/BlogImages/iStock_000049664402_470x260.jpg"
                    className="landing__img"
                  />
                </p>
                <Link to="/random-beer">
                  <Button color='twitter' as="a" size="large">
                    I Choose You!
                  </Button>
                </Link>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" className="landing__title">
                  You need new taste?
                </Header>
                <Grid.Column floated="center" width={6}>
                  <p
                    style={{
                      fontSize: '1.33em',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      bordered
                      rounded
                      size="large"
                      src="https://www2.heineken.com/za/~/resources/heineken/shared/ourads/ourads_theinsider3/cities3_1600x900.jpg?v=20160927_125942&h=843&w=1498&la=en&hash=FEDA2EFF35BC7DBC54BBCB4DFA367948007F90C3"
                      className="landing__img"
                    />
                  </p>
                  <Link to="/new-beer">
                    <Button color='twitter' as="a" size="large">
                      Create Your Beer!
                    </Button>
                  </Link>
                </Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://github.com/sumi0820/lab-react-ironbeers"
                  >
                    Github Repo
                  </List.Item>
                  <List.Item as="a" href="https://www.ironhack.com/en">
                    Ironhack
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted textAlign="center">
                  React IronBeers
                </Header>
                <p>
                  Since beer is one of the most consumed drinks between
                  Ironhackers 🍻 , our mission here is to create an app to
                  showcase some of the best-handcrafted beers, but not just that
                  - to save some as well so the rest of Ironhack community is
                  informed 😌. Our end goal is creating something like this:
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </>
  );
};

export default Landing;
