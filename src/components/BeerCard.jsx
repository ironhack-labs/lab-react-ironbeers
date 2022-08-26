import { Link } from "react-router-dom";

const BeerCard = ({ beer }) => {
  return (
    <Link to={beer._id}>
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
