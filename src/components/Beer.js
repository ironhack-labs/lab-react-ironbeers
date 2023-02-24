import { Card } from "antd";

function Beer({ beer, showDetails }) {
  return (
    <>
      <a href={`beers/{beer._id}`}>
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
          <p>
            <b>Created by:</b> {beer.contributed_by?.replace(/<.*?>/g, "")}
          </p>
          {showDetails && <p>{beer.description}</p>}
        </Card>
      </a>
    </>
  );
}

export default Beer;
