import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
function BeerDetailsPage() {
  // TODO create a custom hook

  const [beerDetail, setBeerDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { beerId } = useParams();
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
      .then((resp) => setBeerDetail(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div className="homepage">
      {beerDetail && (
        <Card key={beerDetail._id}>
          <Card.Img src={beerDetail.image_url} alt={beerDetail.name + "img"} />
          <Card.Body>
            <Card.Title>{beerDetail.name}</Card.Title>
            <Card.Text>First Brewed : {beerDetail.first_brewed}</Card.Text>
            <Card.Text>
              Attenuation Level:{beerDetail.attenuation_level}
            </Card.Text>
            <Card.Text>Description:{beerDetail.description}</Card.Text>
            <Card.Text>Contributed by :{beerDetail.contributed_by}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default BeerDetailsPage;