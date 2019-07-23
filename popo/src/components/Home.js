import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
function HomeContainer() {
  return (
    <div className="home">
      <Card>
        <img src="./img/beers.png" alt="jkn" />
        <br />
        <Link to="/all">
          <Button>All Beers</Button>
        </Link>
      </Card>
      <Card>
        <img src="./img/random-beer.png" alt="edc" />
        <br />
        <Link to="/random">
          <Button>Random Beer</Button>
        </Link>
      </Card>
      <Card>
        <img src="./img/new-beer.png" alt="poi" />
        <br />
        <Link to="/new">
          <Button>New Beer</Button>
        </Link>
      </Card>
    </div>
  );
}

export default HomeContainer;
