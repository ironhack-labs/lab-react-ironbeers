import { Link } from "react-router-dom";

const BeerCard = ({ beer }) => {
  //   console.log("key", key);
  return (
    <Link to={"/"}>
      {/* // <Link to="/single-beer" id={beer.key}> */}
      <div className="beer-card">
        <img src={beer.image_url} alt={beer.name} />
        <div className="beer-info">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>
            {/* adicionei para não mostrar o que ta entre  */}
            Created by:
            {beer.contributed_by.slice(0, beer.contributed_by.indexOf("<"))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BeerCard;
