import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const HomeCards = () => {
  return (
    <Col xs={24}>
      <Link to="/beers">
        <Card
          cover={
            <img
              alt="all-beers"
              src="https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/302f215349ab6ee080b8a0253d06f0b9a5a8ed27/img/beers.png"
            />
          }
          hoverable
        >
          <Meta
            title="All Beers"
            description="Come and look all the available beers!"
          />
        </Card>
      </Link>
      <Link to="/random-beer">
        <Card
          cover={
            <img
              alt="random-beer"
              src="https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/302f215349ab6ee080b8a0253d06f0b9a5a8ed27/img/new-beer.png"
            />
          }
          hoverable
        >
          <Meta title="Random Beer" description="Why not?" />
        </Card>
      </Link>
      <Link to="/new-beer">
        <Card
          cover={
            <img
              alt="new-beer"
              src="https://raw.githubusercontent.com/ironhack-labs/lab-react-ironbeers/302f215349ab6ee080b8a0253d06f0b9a5a8ed27/img/random-beer.png"
            />
          }
          hoverable
        >
          <Meta title="New Beer" description="What kind of beer do you like?" />
        </Card>
      </Link>
    </Col>
  );
};

export default HomeCards;
