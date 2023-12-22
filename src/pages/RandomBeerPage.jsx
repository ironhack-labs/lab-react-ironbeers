
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((resp) => setRandomBeer(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div className="homepage">
      {randomBeer && (
        <Card key={randomBeer._id}>
          <Card.Img src={randomBeer.image_url} alt={randomBeer.name + "img"} />
          <Card.Body>
            <Card.Title>{randomBeer.name}</Card.Title>
            <Card.Text>First Brewed : {randomBeer.first_brewed}</Card.Text>
            <Card.Text>
              Attenuation Level:{randomBeer.attenuation_level}
            </Card.Text>
            <Card.Text>Description:{randomBeer.description}</Card.Text>
            <Card.Text>Contributed by :{randomBeer.contributed_by}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default RandomBeersPage;