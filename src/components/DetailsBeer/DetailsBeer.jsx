const DetailsBeer = ({ beer }) => {


    return (
        <>
            <img className='col-3' src={beer.image_url} alt="beer" />
            <div className='col'>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>Description: {beer.description}</p>
                <p>{beer.contributed_by}</p>

            </div>
        </>

    )
}

export default DetailsBeer