function RandomBeer({ beers }) {
  const randomNum = Math.floor(Math.random() * beers.length);

  return (
    <div className='beer-details'>
      <img src={beers[randomNum].image_url} alt='Beer bottle' />
      <div className='beer-details-header'>
        <div className='beer-details-left'>
          <h1>{beers[randomNum].name}</h1>
          <h3>{beers[randomNum].tagline}</h3>
        </div>
        <div className='beer-details-right'>
          <h2>{beers[randomNum].attenuation_level}</h2>
          <p>
            <strong>{beers[randomNum].first_brewed}</strong>
          </p>
        </div>
      </div>
      <div className='beer-details-main'>
        <p>{beers[randomNum].description}</p>
        <span>{beers[randomNum].contributed_by}</span>
      </div>
    </div>
  );
}

export default RandomBeer;
