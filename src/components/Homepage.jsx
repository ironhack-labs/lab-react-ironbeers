import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
import { Container, Card } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container>
      <Card style={{ margin: "1.7rem" }}>
        <Card.Img src={beersImg} alt="All Beers" />
        <Card.Body style={{ textAlign: "left" }}>
          <Link to={"/beers"}>
            <Card.Title>All Beers</Card.Title>
          </Link>
          <Card.Text>
            Spineless, took able bed. He were in only point from as cut in he
            than village to little try stiff he position. Then blind the made
            the judgment, small on and needed feedback gave dream. Elite. Powers
            ambushed a the trust the continues in subject done to were the that.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ margin: "1.7rem" }}>
        <Card.Img src={randomBeerImg} alt="All Beers" />
        <Card.Body style={{ textAlign: "left" }}>
          <Link to={"/random-beer"}>
            <Card.Title>Random Beer</Card.Title>
          </Link>
          <Card.Text>
            Spineless, took able bed. He were in only point from as cut in he
            than village to little try stiff he position. Then blind the made
            the judgment, small on and needed feedback gave dream. Elite. Powers
            ambushed a the trust the continues in subject done to were the that.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ margin: "1.7rem" }}>
        <Card.Img src={newBeerImg} alt="All Beers" />
        <Card.Body style={{ textAlign: "left" }}>
          <Link to={"/new-beer"}>
            <Card.Title>New Beer</Card.Title>
          </Link>
          <Card.Text>
            Spineless, took able bed. He were in only point from as cut in he
            than village to little try stiff he position. Then blind the made
            the judgment, small on and needed feedback gave dream. Elite. Powers
            ambushed a the trust the continues in subject done to were the that.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
