import React from "react";
import Beer from "../components/Beer";
import { Row } from "antd";

function Beers({ beers }) {
  return (
    <div className="beer-collection">
      <Row>
        {beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Beer beer={beer} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default Beers;
