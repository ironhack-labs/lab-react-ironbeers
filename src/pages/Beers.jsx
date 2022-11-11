import GridLoader from 'react-spinners/GridLoader';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BeerContext } from '../context/beer.context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';

function Beers() {
  const { beers, loading } = useContext(BeerContext);

  const containerStyle = {
    display: 'flex',
    padding: '10px',
  };

  const imageStyle = {
    height: '200px',
    margin: '10px 20px',
  };
  const imgContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '30%',
  };

  const getOnlyName = (name) => {
    const index = name.indexOf('<');
    return name.slice(0, index);
  };

  return (
    <>
      {loading && (
        <div className="flex">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <TableContainer sx={{ margin: 'auto', marginTop: '100px' }} component={Paper}>
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
