import Header from "./Header";
import { useParams } from "react-router-dom"

const BeerCard = ({ beers }) => {
  const { id } = useParams();

  const beerDetail = beers.find((beer) => {
    return beer._id === id;
  });

  return (
    <div className="BeerCard">
      <Header />
      <div className="d-flex p-5 border-bottom my-3" >
        <img src={beerDetail.image_url} alt="beer" height="300" width="150" />
        <div className="p-5">
          <h1>{beerDetail.name}</h1>
          <p>{beerDetail.tagline}</p>
          <p>First Brewed: {beerDetail.first_brewed}</p>
          <p>Attenuation Level: {beerDetail.attenuation_level}</p>
          <p>{beerDetail.description}</p>
          <p>Contributed By: {beerDetail.contributed_by}</p>
        </div>
      </div>
    </div>
  )
}

export default BeerCard;