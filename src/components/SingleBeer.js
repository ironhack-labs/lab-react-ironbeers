import { useParams } from "react-router-dom";
import Header from "./Header";
import "./SingleBeer.css";

function SingleBeer(props) {
  const { beerId } = useParams();
  console.log("beerId:" + beerId);
  const beer = props.beers.filter((beer) => {
    return beer._id === beerId;
  });
  return (
    <div>
      <Header />
      <h1>Name: {beer[0].name}</h1>
      <img src={beer[0].image_url} alt="" />
      <h3>Tagline:{beer[0].tagline}</h3>
      <h4>Contributed By: {beer[0].contributed_by}</h4>
      <h4>First Brewed: {beer[0].first_brewed}</h4>
      <h4>Attenuation Level:{beer[0].attenuation_level}</h4>
      <h4>Decription: {beer[0].description}</h4>

    </div>
  );
}

export default SingleBeer;





