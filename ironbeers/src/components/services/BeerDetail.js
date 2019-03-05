import React from 'react';


const BeerDetail = (props) => {
  return (
    <div>
        <div className="beer-detail">
            <img className="beer-detail-img" src={props.image_url} alt="Placeholder"/>
            <div className="beer-detail-text">  
                <p className="detail-text1">{props.name}</p>
                <p className="detail-text2">{props.tagline}</p>
                <p className="detail-text3">{props.description}</p>
                <p className="detail-text4">{props.contributed_by}</p>

            </div>
        </div>
    </div>
  )
}

export default BeerDetail;