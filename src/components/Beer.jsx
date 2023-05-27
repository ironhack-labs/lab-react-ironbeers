import { Link } from "react-router-dom";

function Beer({ data }) {
  return (
    <div>
      <Link to={`/beers/${data._id}`}>
        <img src={data.image_url} alt="foto-beer" width={60}></img>
        <div>
          <h3>{data.name}</h3>
          <h4>{data.tagline}</h4>
          <p>Created by: {data.contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}

export default Beer;
