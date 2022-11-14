import { Link } from 'react-router-dom';

const cardStyle = {
  maxWidth: '400px',
  padding: '10px',
  margin: '10px',
  border: '1px solid #123456',
  borderRadius: '25px 10px',
  boxShadow: '2px 2px 0px #123456',
};

const imageStyle = { height: '200px', width: '100%', objectFit: 'cover', borderRadius: '25px 10px' };

const linkStyle = { textDecoration: 'none', color: '#000' };

const subtitleStyle = { fontSize: 18, color: '#666', marginBottom: '10px' };

function HomeCard({ props }) {
  return (
    <div style={cardStyle}>
      <Link to={props.link} style={linkStyle}>
        <div style={{ minWidth: '250px', padding: '10px' }}>
          <img src={props.img} style={imageStyle} alt="{title}" />
          <div>
            <h2 style={{ marginBottom: '5px' }}>{props.title}</h2>
            <p style={subtitleStyle}>{props.subtitle}</p>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default HomeCard;
