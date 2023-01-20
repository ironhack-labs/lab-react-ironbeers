import { Link } from "react-router-dom"

export default function Beers(props){
    return(
        <>
         {props.beersList.map((beer, index) => {
             return (
                 <div key={index}>
                     <Link to={beer._id}>{beer.image_url
                         ? <img src={beer.image_url} alt={beer.name} />
                         : <img src="https://via.placeholder.com/150"
                             alt={beer.name} />}<br /></Link><br />
                     {beer.name}<br />
                     {beer.tagline}<br />
                     <p>Created by:</p>{beer.contributed_by}<br />
                 </div>
             )
         })}
        </>
    )
}