import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

function RandomBeer(props) {
  const [beer, setBeer] = useState([
    {
      image: '',
      name: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: 0,
      description: '',
      contributed_by: '',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );
        setBeer([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  /*  [...reseponse.data] = beerInfo.find(
    (item) => item._id === props.match.params._id
  );
 */

  return (
    <div>
      <NavBar></NavBar>
      <table className="table">
        <tbody>
          {beer.map((beers) => (
            <tr>
              <td>
                <img
                  className="image is-128x128"
                  src={beers.image_url}
                  alt="beer img"
                ></img>
              </td>
              <td>{beers.name}</td>
              <td>{beers.tagline}</td>
              <td>{beers.first_brewed}</td>
              <td>{beers.attenuation_level}</td>
              <td>{beers.description}</td>
              <td>{beers.contributed_by}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RandomBeer;
