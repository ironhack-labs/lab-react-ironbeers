import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import { Container, Row, Col } from 'reactstrap';
function Home() {
  return (
    <>
      <div>
        <div>
          <Card>
            <NavLink activeStyle={{ color: 'red' }} to="/Beers">
              <CardImg top width="100%" src={beers} alt="Card image cap" />
            </NavLink>
            <CardBody>
              <CardTitle tag="h5">All Beers</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <NavLink activeStyle={{ color: 'red' }} to="/RandomBeers">
              <CardImg top width="100%" src={newBeer} alt="Card image cap" />
            </NavLink>
            <CardBody>
              <CardTitle tag="h5">Random Beer</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <NavLink activeStyle={{ color: 'red' }} to="/NewBeers">
              <CardImg top width="100%" src={randomBeer} alt="Card image cap" />
            </NavLink>
            <CardBody>
              <CardTitle tag="h5">New Beer</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Home;
