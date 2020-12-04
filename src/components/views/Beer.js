import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Beer.css'


const Beer = ({ name, image_url, tagline, path, contributed_by }) => {
    return (
        <Link to={path} className='link'>
            <Media as="li" className='beer-card'>
                <img
                    width={100}
                    height={100}
                    src={image_url}
                    alt={name}
                />
                <Media.Body>
                    <h5>{name}</h5>
                    <p>{tagline}</p>
                    <small>{contributed_by}</small>
                </Media.Body>
            </Media>
        </Link>
    )
}

export default Beer 