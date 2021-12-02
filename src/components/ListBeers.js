import React from 'react'
import './ListBeers.css'
import { Link } from 'react-router-dom'

function ListBeers(props) {
    return (
        <div>
            <h1>All beers</h1>
            {props.beers.map((elem) => {
              return (
                <div className="img-container">
                    <img src={elem.image_url} alt={elem.name}/>
                    <h1>{elem.name}</h1>
                    <h3>{elem.tagline}</h3>
                    <p>{elem.contributed_by}</p>
                    <Link to={`/beers/${elem._id}`}>
                        Detalles
                    </Link>
                </div>
              );
            })}
        </div>
    )
}

export default ListBeers
