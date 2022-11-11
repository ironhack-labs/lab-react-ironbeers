import { useEffect, useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

function Beers() {
  const [beers, setBeers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchallBeers() {
      const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';
      const response = await fetch(apiURL);
      const data = await response.json();

      setBeers(data);
      setLoading(false);
    }
    fetchallBeers();
  }, []);

  // image
  // name
  // tagline
  // contributed_by
  // Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId

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
      {loading && <GridLoader color="#36d7b7" size={150} />}
      {!loading &&
        beers.map((beer) => {
          return (
            <div key={beer._id}>
              <div style={containerStyle}>
                <div style={imgContainerStyle}>
                  <img src={beer.image_url} style={imageStyle} alt={beer.name} />
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
