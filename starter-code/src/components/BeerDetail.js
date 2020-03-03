import React from 'react'

const BeerDetail = (props) => {
    return (
        <div>
            <div>
                <img src={props.beerslist.image_url} alt="" height="100px"/>
                <h4>{props.beerslist.name}</h4>
                <p>{props.beerslist.tagline}</p>
                <p>{props.beerslist.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerDetail;