
function BeerCard(props) {
    return(
        <div className="beerCard">
            <img src={props.src} alt="Beer banner"/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default BeerCard;