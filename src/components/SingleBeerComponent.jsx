const imageStyle = { height: '300px', marginTop: '40px' };
const imageDivStyle = { display: 'flex', justifyContent: 'center' };
const rowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const nameStyle = { fontSize: '40px', marginTop: '12px' };
const attenuationLevelStyle = { fontSize: '28px', fontWeight: '600', color: '#bbb', marginTop: '12px' };
const taglineStyle = { fontSize: '20px', fontWeight: '600', color: '#888', marginTop: '12px' };
const firstBrewedStyle = { fontWeight: '700', marginTop: '12px' };
const descriptionStyle = { fontSize: '18px', fontWeight: '600', marginTop: '12px' };
const contributedByStyle = { fontWeight: '600', color: '#888', marginTop: '12px' };
const containerStyle = { display: 'flex', justifyContent: 'center', marginTop: '20px', padding: '10px' };
const cardStyle = { padding: '20px', maxWidth: '400px', borderRadius: '25px 10px', border: '2px solid #123456', boxShadow: '2px 2px 0px #123456' };

function SingleBeerComponent({ aBeer }) {
  return (
    <>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={imageDivStyle}>
            <img src={aBeer.image_url} style={imageStyle} alt={aBeer.name} />
          </div>
          <div style={rowStyle}>
            <p style={nameStyle}>{aBeer.name}</p>
            <p style={attenuationLevelStyle}>{aBeer.attenuation_level}</p>
          </div>
          <div style={rowStyle}>
            <p style={taglineStyle}>{aBeer.tagline}</p>
            <p style={firstBrewedStyle}>{aBeer.first_brewed}</p>
          </div>
          <div>
            <p style={descriptionStyle}>{aBeer.description}</p>
          </div>
          <div>
            <p style={contributedByStyle}>{aBeer.contributed_by}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleBeerComponent;
