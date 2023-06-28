import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import styled from '@emotion/styled'

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

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
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    axios
      .get(apiURL)
      .then((response) => {
        setBeer(response.data);
        console.log("response.data =", response.data);
      })
      .catch((err) => console.log("stg happened", err));
  }, [beerId]);

  if (!beer) return "loading...";

  return (
    <div>
    <BeerCard>
      <img src={beer.image_url} alt="beer img" />
      <table>
        <tr>
          <td>
            <h2>{beer.name}</h2>
          </td>
          <td>
            <p>{beer.attenuation_level}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>{beer.tagline}</h3>
          </td>
          <td>
            <p>{beer.first_brewed}</p>
          </td>
        </tr>
      </table>
    <p>{beer.description}</p>
    <h4>{beer.contributed_by}</h4>
    </BeerCard>
    </div>
  );
}

export default BeerDetailsPage;
