import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BeerContext } from '../context/beer.context';

const imageStyle = {
  height: '300px',
  marginTop: '40px',
};

const imageDivStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

function SingleBeer() {
  const { beers } = useContext(BeerContext);
  const { beerId } = useParams();
  const selectedBeer = beers.find((beer) => {
    return beer._id === beerId;
  });

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={imageDivStyle}>
          <img src={selectedBeer.image_url} style={imageStyle} alt={selectedBeer.name} />
        </div>
        <div style={rowStyle}>
          <p style={{ fontSize: '40px', marginTop: '12px' }}>{selectedBeer.name}</p>
          <p style={{ fontSize: '28px', fontWeight: '600', color: '#bbb', marginTop: '12px' }}>{selectedBeer.attenuation_level}</p>
        </div>
        <div style={rowStyle}>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#888', marginTop: '12px' }}>{selectedBeer.tagline}</p>
          <p style={{ fontWeight: '700', marginTop: '12px' }}>{selectedBeer.first_brewed}</p>
        </div>
        <div>
          <p style={{ fontSize: '18px', fontWeight: '600', marginTop: '12px' }}>{selectedBeer.description}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#888', marginTop: '12px' }}>{selectedBeer.contributed_by}</p>
        </div>
      </div>
    </>
  );
}
export default SingleBeer;
