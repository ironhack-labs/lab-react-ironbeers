import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = props => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <Link className="mx-auto" to={props.link}>
                    <h5 className="card-title">{props.title}</h5>
                </Link>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    )
}

export default HomeCard
