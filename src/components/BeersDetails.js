function BeerDetails({ beerInfo }){
    return (
      <div style={{
        padding: '20px'
      }}>
        <img
          src={beerInfo.image_url}
          alt={beerInfo.name}
          height="400px"
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <h2>{beerInfo.name}</h2>
          <p style={{
            fontSize: '20px',
            color: 'gray',
            fontWeight: 'bold'
          }}>{beerInfo.attenuation_level}</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <p style={{
            color: 'gray',
            margin: 0
          }}>{beerInfo.tagline}</p>
          <small style={{
            fontWeight: 'bold'
          }}>{beerInfo.first_brewed}</small>
        </div>
        <div style={{
          textAlign: 'left'
        }}>
          <p>{beerInfo.description}</p>
          <p style={{
            fontWeight: 'bold',
            color: 'gray'
          }}>{beerInfo.contributed_by}</p>
        </div>
      </div>
    )
  }
  
  export default BeerDetails;