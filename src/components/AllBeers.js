import React from 'react'
import {Link} from 'react-router-dom'


function AllBeers(props) {
    const {image, contributed_by, name, tagline, beerId} = props
    return (
        <div className="one-beer-cont">
            <div className="one-beer-image">
                <img src={image} alt="beerImg"/>
            </div>
            <div className="one-beer-text-cont">
                <Link style={{textDecoration: 'none'}} to={`/beer/${beerId}`}>
                    <h2 className="title">
                        {name}
                    </h2>
                </Link>
                <p className="tagline">
                    {tagline}
                </p>
                <p className="contributed">
                    <strong>Created by:</strong> {contributed_by}
                </p>
            </div>
        </div>
    )
}

export default AllBeers