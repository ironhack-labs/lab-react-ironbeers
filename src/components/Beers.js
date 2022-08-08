import Header from "./Header";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { v4 as randomId } from "uuid";

function Beers(props) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setBeers(props.beers);
  }, [props.beers]);

  return (
    <div>
      <Header />
      {!beers && <h3>Loading...</h3>}
      {beers &&
        beers.map((beer) => {
          return (
            <div
              key={randomId()}
            >
              <NavLink
                to={`/beers/${beer._id}`}
                style={{ textDecoration: "none" }}
              >
                <Row
                  style={{
                    paddingBottom: 8,
                    paddingLeft: 24,
                    paddingRight: 24,
                  }}
                >
                  <Col span={2}>
                    <h2 style={{ color: "black" }}>{beer.name}</h2>
                    <img
                      src={beer.image_url}
                      alt="flag"
                      style={{
                        height: 200,
                        padding: 12,
                        justifyContent: "center",
                      }}
                    />
                  </Col>
                  <Col span={2} style={{ lineHeight: 2, padding: 24 }}>
                    <span
                      style={{ fontWeight: 700, color: "grey", fontSize: 24 }}
                    >
                      {beer.tagline}
                    </span>
                    <br />
                    <span style={{ fontSize: 20, color: "black" }}>
                      <b>Created by:</b>
                      {beer.contributed_by}
                    </span>
                  </Col>
                </Row>
                <hr style={{color: 'lightgray'}}/>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Beers;