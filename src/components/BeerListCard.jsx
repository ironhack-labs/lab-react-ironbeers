import { Link } from 'react-router-dom';

const imageContainerStyle = { width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' };
const imageStyle = { height: '150px', margin: '10px' };

const cardStyle = {
  minWidth: '250px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  color: '#123456',
  borderRadius: '4px',
  boxShadow: '1px 1px 3px #123456',
};

const getOnlyName = (name) => {
  const index = name.indexOf('<');
  return name.slice(0, index);
};

function BeerListCard({ beer }) {
  return (
    <div style={{ width: '350px', padding: '10px' }}>
      <Link to={beer._id} style={{ textDecoration: 'none' }}>
        <div style={cardStyle}>
          <div style={imageContainerStyle}>
            <img src={beer.image_url} style={imageStyle} alt={beer.name} />
          </div>
          <div style={{ width: '60%' }}>
            <h5 style={{ fontSize: 28, margin: '10px' }}>{beer.name}</h5>
            <p style={{ fontSize: 18, color: '#999' }}>{beer.tagline}</p>
            <p>
              <span style={{ fontWeight: '500', fontSize: '14px' }}>Created by:</span> {getOnlyName(beer.contributed_by)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default BeerListCard;
