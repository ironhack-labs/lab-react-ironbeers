const DisplayBeerCard = ({ src, name, tagline, contributed_by }) => {
	return (
		<div className="beerCardAll">
			<div className="beerCardAllImg">
                <img src={src} alt='altImgBeer' />
            </div>
			<div className="beerCardAllText">
                <h1>{name} Beer</h1>
                <h2>{tagline}The Best Beer</h2>
                <h4>{contributed_by}Jean</h4>
            </div>
		</div>
	);
};

export default DisplayBeerCard;
