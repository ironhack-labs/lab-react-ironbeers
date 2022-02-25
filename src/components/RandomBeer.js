import NavBar from "./NavBar";

export default function RandomBeer(props) {
  const randomIndex = Math.floor(Math.random() * props.beers.length);

  const randomBeer = props.beers[randomIndex];

  const renderDetails = (randomBeer) => {
    return (
      <>
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <h3>Name: {randomBeer.name} </h3>
        <p>Tagline: {randomBeer.tagline} </p>
        <p>First brewed: {randomBeer.first_brewed} </p>
        <p>Att. level: {randomBeer.attenuation_level} </p>
        <p>Description: {randomBeer.description} </p>
        <p>Contributed by: {randomBeer.contributed_by} </p>
      </>
    );
  };

  return (
    <div className="BeerDetails">
      <NavBar />

      {randomBeer ? renderDetails(randomBeer) : <p>No details.....</p>}
    </div>
  );
}
