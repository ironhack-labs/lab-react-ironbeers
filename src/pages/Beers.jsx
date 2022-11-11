import GridLoader from 'react-spinners/GridLoader';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BeerContext } from '../context/beer.context';

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
      {!loading &&
        beers.map((beer) => {
          return (
            <div key={beer._id}>
              <div style={containerStyle}>
                <div style={imgContainerStyle}>
                  <Link to={beer._id}>
                    <img src={beer.image_url} style={imageStyle} alt={beer.name} />
                  </Link>
                </div>

                <div>
                  <p style={{ fontSize: 32 }}>{beer.name}</p>
                  <p style={{ fontSize: 20, color: '#999' }}>{beer.tagline}</p>
                  <p>
                    <span style={{ fontWeight: '500', fontSize: '14px' }}>Created by:</span> {getOnlyName(beer.contributed_by)}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </>
  );
}
export default Beers;
