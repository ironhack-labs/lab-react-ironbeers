import { Link } from 'react-router-dom'

const OneBeer = ({ beer }) => {


    return (
        <>
            <img className='col-3' src={beer.image_url} alt="beer" />
            <div className='col'>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p>Created by: {beer.contributed_by}</p>
                <Link to={`/details/${beer._id}`} >DETALLES</Link>
            </div>
        </>

    )
}

export default OneBeer