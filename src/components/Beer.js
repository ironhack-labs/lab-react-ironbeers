function Beer({ beer }) {
  return (
    <div className="beer">
      <img
        src={beer.image_url}
        alt={beer.name}
      ></img>
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default Beer;
