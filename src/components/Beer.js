import { Card } from "antd";

function Beer({ beer, showDetails }) {
  return (
    <Card
      className="beer-card"
      style={{ margin: 20 }}
    >
      <img
        src={beer.image_url}
        alt={beer.name}
      ></img>
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      {showDetails && <p>{beer.description}</p>}
      {showDetails && <p>{beer.contributed_by}</p>}
    </Card>
  );
}

export default Beer;
