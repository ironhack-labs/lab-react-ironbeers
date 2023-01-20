import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
        <Card style={{ margin: "10px 100px"}}>
            <Card.Img src={beers} alt="" />
            <Card.Body style={{ textAlign: "left" }}>
                <Link to={"/beers"}>
                    <Card.Title>All Beers</Card.Title>
                </Link>
                <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ margin: "10px 100px" }}>
            <Card.Img src={randomBeer} alt="" />
            <Card.Body style={{ textAlign: "left" }}>
                <Link to={"/random-beer"}>
                    <Card.Title>Random Beer</Card.Title>
                </Link>
                <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Card.Text>
            </Card.Body>
        </Card>
        
        <Card style={{ margin: "10px 100px" }}>
            <Card.Img src={newBeer} alt="" />
            <Card.Body style={{ textAlign: "left" }}>
                <Link to={"/new-beer"}>
                    <Card.Title>New Beer</Card.Title>
                </Link>
                <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  );
}
