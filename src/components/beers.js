// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers(props) {
  const [state, setState] = useState([
    {
      image: '',
      name: '',
      tagline: '',
      contributed_by: '',
    },
  ]);
  /* console.log(typeof state); */

  useEffect(() => {
    async function fecthData() {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        /*  console.log(response); */
        setState([...response.data]);
      } catch (err) {
        /*  console.error(err); */
      }
    }

    fecthData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <table className="table">
        <tbody>
          {state.map((beers) => (
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
              <td>{beers.contributed_by}</td>
              <td>
                <Link to={`/beers/${beers._id}`}>See Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Beers;
