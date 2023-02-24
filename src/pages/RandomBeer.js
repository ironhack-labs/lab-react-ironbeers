function RandomBeer({ beer }) {
  return (
    <div>
      <h1>Random Beer</h1>
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

export default RandomBeer;
