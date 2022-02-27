import { useParams, Link } from "react-router-dom";
import { Row, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";

function BeerDetails(props) {
  const { beerId } = useParams();

  //get beer object from beer id
  const chosenBeer = props.beers.find((beerObj) => {
    return beerObj._id === beerId;
  });

  return (
    <Row>
      <Link to="/beers" className="link">
        <Space
          wrap
          style={{
            backgroundColor: "var(--main-bg-color)",
            fontSize: "32px",
            width: "100%",
          }}
        >
          <div>
            <LeftOutlined
              style={{
                width: "100%",
                padding: "20px 0",
                color: "#696940",
                marginLeft: "-150px",
              }}
            />
          </div>
        </Space>
      </Link>

      {!chosenBeer && <h3>Loading...</h3>}

      {chosenBeer && (
        <Row style={{ margin: 24 }}>
          <Row>
            <img
              src={chosenBeer.image_url}
              alt="flag"
              style={{
                height: 200,
                padding: 12,
                marginLeft: "30%",
              }}
            />
          </Row>

          <h2 style={{ color: "black" }}>{chosenBeer.name}</h2>
          <h4 style={{ color: "black" }}>
            Attenuation Level: <b>{chosenBeer.attenuation_level}</b>
          </h4>

          <h6 style={{ fontWeight: 700, color: "grey", fontSize: 24 }}>
            {chosenBeer.tagline}
          </h6>

          <span style={{ fontWeight: 700, color: "grey", fontSize: 24 }}>
            First Brewed: {chosenBeer.first_brewed}
          </span>
          <p style={{ fontSize: "1.5rem" }}>{chosenBeer.description}</p>
          <span>{chosenBeer.contributed_by}</span>
        </Row>
      )}
    </Row>
  );
}

export default BeerDetails;
