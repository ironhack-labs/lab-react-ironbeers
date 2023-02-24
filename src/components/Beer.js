import { Card } from "antd";
import { Link } from "react-router-dom";

function Beer({ beer, showDetails }) {
  return (
    <>
      <Link to={`/${beer._id}`}>
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
      </Link>
    </>
  );
}

export default Beer;
