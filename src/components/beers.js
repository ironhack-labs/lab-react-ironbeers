// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers(props) {
  const [state, setState] = useState({
    image: '',
    name: '',
    tagline: '',
    contributed_by: '',
  });

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
      <table class="table">
        <tbody>
          {state.map((beers) => (
            <tr>
              {beers.id}
              <td>{beers.image}</td>
              <td>{beers.name}</td>
              <td>{beers.tagline}</td>
              <td>{beers.contributed_by}</td>
              <td>
                <Link to={`/beers/${beers.id}`}>See Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Beers;
