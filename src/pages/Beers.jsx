import GridLoader from 'react-spinners/GridLoader';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { BeerContext } from '../context/beer.context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

function Beers() {
  const { beers, setBeers, loading, setLoading } = useContext(BeerContext);
  const [inputState, setInputState] = useState('');

  async function fetchBeerSearch(input) {
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/search?q=${input}`;
    const response = await fetch(apiURL);
    const data = await response.json();

    setBeers(data);
    setLoading(false);
  }

  const handleChange = (e) => {
    setLoading(true);
    setInputState(e.target.value);
    fetchBeerSearch(e.target.value);
  };

  const imageStyle = {
    height: '200px',
    margin: '10px 20px',
  };

  const getOnlyName = (name) => {
    const index = name.indexOf('<');
    return name.slice(0, index);
  };

  return (
    <>
      <TextField sx={{ margin: '20px' }} onChange={handleChange} value={inputState} label="Filter Beer" />
      {loading && (
        <div className="flex">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <TableContainer sx={{ margin: 'auto', maxWidth: '400px', marginTop: '20px' }} component={Paper}>
          <Table>
            <TableBody>
              {beers.map((beer) => {
                return (
                  <TableRow key={beer._id}>
                    <TableCell align="center">
                      <Link to={beer._id}>
                        <img src={beer.image_url} style={imageStyle} alt={beer.name} />
                      </Link>
                    </TableCell>
                    <TableCell align="left">
                      <div>
                        <p style={{ fontSize: 32 }}>{beer.name}</p>
                        <p style={{ fontSize: 18, color: '#999' }}>{beer.tagline}</p>
                        <p>
                          <span style={{ fontWeight: '500', fontSize: '14px' }}>Created by:</span> {getOnlyName(beer.contributed_by)}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
export default Beers;
