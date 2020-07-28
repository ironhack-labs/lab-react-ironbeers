import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = props => {
    return (
        <Link className="mx-auto" to={props.link}>
            <div className="card no-link-style no-link-clickable" style={{width:"18rem"}}>
                <img className="card-img-top" src={props.img} alt="Card cap" />
                <div className="card-body">             
                    <h5 className="card-title mx-auto">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default HomeCard
