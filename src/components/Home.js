import React from 'react'
import { NavLink } from 'react-router-dom'
import beersImage from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';



export default function Home() {
    return (
        <>

        <div>
            {/* <img src={beersImage} alt="" /> */}
            {/* <img src={newBeer} alt="" />
            <img src={randomBeer} alt="" /> */}
            <div>
      <Card id="card-col">
        <CardBody>
        </CardBody>
        <NavLink id="rm-txt" to="/beers-list"><img width="100%" src={beersImage} alt="Card image cap" /></NavLink>
        <CardBody>
        <NavLink id="rm-txt" to="/beers-list">  <CardTitle tag="h5">All beers</CardTitle></NavLink>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card id="card-col">
        <CardBody>
        </CardBody>
        <NavLink id="rm-txt" to="/random-beer"><img width="100%" src={randomBeer} alt="Card image cap" /></NavLink>
        <CardBody>
        <NavLink id="rm-txt" to="/random-beer">  <CardTitle tag="h5">Random Beer</CardTitle></NavLink>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>

    <div>
      <Card id="card-col">
        <CardBody>
        </CardBody>
        <NavLink id="rm-txt" to="/new-beer"><img width="100%" src={newBeer} alt="Card image cap" /></NavLink>
        <CardBody>
        <NavLink id="rm-txt" to="/new-beer">  <CardTitle  tag="h5">New Beer</CardTitle></NavLink>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>

        </div>


        </>
    )
}
