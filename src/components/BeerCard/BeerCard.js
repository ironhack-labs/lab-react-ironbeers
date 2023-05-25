import './BeerCard.css'
import { Link } from 'react-router-dom'

export default function BeerCard({_id, name, image_url, description, contributed_by}) {

    function getOnlyName(text, symbol) {
        let index = text.indexOf(symbol);
        if (index !== -1) {
          return text.slice(0, index);
        }
        return text;
      }

    return (
        <Link to={`/details/${_id}`}  id="beerCard__container--body">
            <img id='beerCard__img' src={image_url} alt="beer image"></img>
            <div id="beerCard__container--text">
               <h2>{name}</h2> 
               <h6>{description}</h6>
               <p><strong>Contributed by: </strong>{getOnlyName(contributed_by, "<")}</p>
            </div>
        </Link>
    )
}