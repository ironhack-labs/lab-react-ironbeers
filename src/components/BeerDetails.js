import Header from "./Header";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";

function BeerDetails(props) {
  const { beerId } = useParams();
  console.log("chosen beer Id", beerId);

  //get data from props to show chosen beer through its ID
  const chosenBeer = props.beers.find((beerObj) => {
    return beerObj._id === beerId;
  });

  console.log("image", chosenBeer);

  return (
    <div>
      <Header />
      <Row style={{ padding: 24 }}>
        {!chosenBeer && <h3>Loading...</h3>}

        {chosenBeer && (
          <div>
            <Col span={8}>
              <h2 style={{ color: "black" }}>{chosenBeer.name}</h2>
              <img
                src={chosenBeer.image_url}
                alt="flag"
                style={{ height: 120, paddingTop: 8 }}
              />
            </Col>
            <Col span={8} style={{ lineHeight: 2, paddingTop: 24 }}>
              <span style={{ fontWeight: 700, color: "grey", fontSize: 24 }}>
                {chosenBeer.tagline}
              </span>
              <br />
              <span style={{ fontSize: 20, color: "black" }}>
                <b>Created by:</b>
                {chosenBeer.contributed_by}
              </span>
              <hr />
            </Col>
          </div>
        )}
      </Row>
    </div>
  );
}

export default BeerDetails;
