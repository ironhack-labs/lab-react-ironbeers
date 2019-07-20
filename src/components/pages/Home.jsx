import React from 'react'

import HomeHeader from "../HomeHeader";

import {Container } from "reactstrap";

import PageLink from '../PageLink'

export default function Home() {
  return (
    <div>
    <Container>
    <PageLink  linkTo="/beers" heading="All Beers" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet" picUrl="/img/beers.png"   />
    <PageLink  linkTo="/random-beer" heading="Random Beer" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet" picUrl="/img/random-beer.png"   />
    <PageLink  linkTo="/new-beer" heading="New Beer" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet" picUrl="/img/new-beer.png"   />
    </Container>
    </div>
  )
}
