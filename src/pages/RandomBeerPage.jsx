import axios from "axios";
import { useState, useEffect } from "react";
import styled from '@emotion/styled'

function RandomBeerPage() {
  const [rdmBeer, setBeer] = useState(null);

  const BeerCard = styled.div`
  margin : 50px 15vw;
  padding : 20px ;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  display : flex;
  flex-direction : column;
  img{
    width : 150px;
    margin : auto;
  } `

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        const nbOfBeers = response.data.length;
        const rdmBeerNb = Math.floor(Math.random() * nbOfBeers);
        setBeer(response.data[rdmBeerNb]);
        console.log("response.data =", response.data[rdmBeerNb]);
      })
      .catch((err) => console.log("stg happened", err));
  }, []);

  if (!rdmBeer) return "loading...";

  return (
    <div>
    <BeerCard>
      <img src={rdmBeer.image_url} alt="beer img" />
      <table>
        <tr>
          <td>
            <h2>{rdmBeer.name}</h2>
          </td>
          <td>
            <p>{rdmBeer.attenuation_level}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>{rdmBeer.tagline}</h3>
          </td>
          <td>
            <p>{rdmBeer.first_brewed}</p>
          </td>
        </tr>
      </table>
      <p>{rdmBeer.description}</p>
      <h4>{rdmBeer.contributed_by}</h4>
      </BeerCard>
    </div>
  );
}

export default RandomBeerPage;
