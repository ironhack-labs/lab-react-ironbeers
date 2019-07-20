import React, { useEffect, useState } from "react";

import { Container } from "reactstrap";

import HomeHeader from "../HomeHeader";
import BeerDetail from "../BeerDetail";

export default function DetailBeer(props) {
  let beer = props.location.beer
  return (
    <div className="DetailBeer">
      <Container>
        <HomeHeader />
        <BeerDetail beer={beer} />
      </Container>
    </div>
  );
}
