import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <div className="home-elements">
          <Card style={{ width: "vw" }}>
            <Card.Img variant="top" src="../images/beers.png" />
            <Card.Body>
              <Card.Title>
                <a href="/viewBeers">All Beers</a>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt facilisis elit, vitae eleifend arcu venenatis sit
                amet. Donec mollis leo augue, at vehicula risus tincidunt sed.
                Nulla et sem ipsum. Integer laoreet, dolor a congue viverra,
                felis sem malesuada nunc, non egestas justo nisi ut diam. In
                eget aliquam massa, in tempus nunc. Proin pharetra vehicula dui
                eget fermentum. Donec ac mauris viverra, tincidunt lectus
                volutpat, feugiat quam.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "vw" }}>
            <Card.Img variant="top" src="../images/random-beer.png" />
            <Card.Body>
              <Card.Title>
                <a href="/viewRandomBeer">Random Beer</a>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt facilisis elit, vitae eleifend arcu venenatis sit
                amet. Donec mollis leo augue, at vehicula risus tincidunt sed.
                Nulla et sem ipsum. Integer laoreet, dolor a congue viverra,
                felis sem malesuada nunc, non egestas justo nisi ut diam. In
                eget aliquam massa, in tempus nunc. Proin pharetra vehicula dui
                eget fermentum. Donec ac mauris viverra, tincidunt lectus
                volutpat, feugiat quam.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "vw" }}>
            <Card.Img variant="top" src="../images/new-beer.png" />
            <Card.Body>
              <Card.Title>
                <a href="/viewNewBeer">New Beer</a>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                tincidunt facilisis elit, vitae eleifend arcu venenatis sit
                amet. Donec mollis leo augue, at vehicula risus tincidunt sed.
                Nulla et sem ipsum. Integer laoreet, dolor a congue viverra,
                felis sem malesuada nunc, non egestas justo nisi ut diam. In
                eget aliquam massa, in tempus nunc. Proin pharetra vehicula dui
                eget fermentum. Donec ac mauris viverra, tincidunt lectus
                volutpat, feugiat quam.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
