function BeerDetails(props) {
    const beer = props.beer
    return (

        <section style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <figure>
                <img style={{ height: '270px', width: '100px', margin: '30px' }} src={beer.image_url} alt='beer' />
            </figure>
            <div style={{ width: '400px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={{ color: 'black' }}>{beer.name}</h1>
                    <h1 style={{ color: '#E8E8E8' }}>  {beer.attenuation_level}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ color: '#E8E8E8' }}>{beer.tagline}</h3>
                    <h6><strong>{beer.first_brewed}</strong></h6>
                </div>
                <p>{beer.description}</p>
                <p style={{ color: '#888888' }}><strong>{beer.contributed_by}</strong></p>
            </div>
        </section>
    )
}


export default BeerDetails;



