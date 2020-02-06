import React from 'react'
import {Link} from 'react-router-dom'

const Section = ({ to, title, description}) => (
    <div className="jumbotron">
        <div className="container">
            <Link to={to} className="text-dark">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{description}</p>
            </Link>
        </div>
    </div>
)

export default Section