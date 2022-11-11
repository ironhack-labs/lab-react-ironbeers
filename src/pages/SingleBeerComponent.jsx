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

function SingleBeerComponent({ aBeer }) {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={imageDivStyle}>
          <img src={aBeer.image_url} style={imageStyle} alt={aBeer.name} />
        </div>
        <div style={rowStyle}>
          <p style={{ fontSize: '40px', marginTop: '12px' }}>{aBeer.name}</p>
          <p style={{ fontSize: '28px', fontWeight: '600', color: '#bbb', marginTop: '12px' }}>{aBeer.attenuation_level}</p>
        </div>
        <div style={rowStyle}>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#888', marginTop: '12px' }}>{aBeer.tagline}</p>
          <p style={{ fontWeight: '700', marginTop: '12px' }}>{aBeer.first_brewed}</p>
        </div>
        <div>
          <p style={{ fontSize: '18px', fontWeight: '600', marginTop: '12px' }}>{aBeer.description}</p>
        </div>
        <div>
          <p style={{ fontWeight: '600', color: '#888', marginTop: '12px' }}>{aBeer.contributed_by}</p>
        </div>
      </div>
    </>
  );
}
export default SingleBeerComponent;
