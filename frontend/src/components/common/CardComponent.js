import React from 'react';
import {Link} from 'react-router-dom'



const CardComponent = ({image_url,name,tagline,contributed_by,id})=>(
    <div>
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <div className="uk-inline">
                    <img src={image_url} alt={name} />
                    <div className="uk-overlay uk-padding-small uk-overlay-primary uk-position-bottom">
                        <h3 className="uk-margin-remove">{name}</h3>
                        <p className="uk-margin-remove">{tagline} </p>
                        <p className="uk-margin-remove">{contributed_by}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-footer uk-text-left">
                <Link to={`/detail/${id}`} class="uk-button uk-button-text">Details</Link>
            </div>
        </div>
    </div>
)

export default CardComponent;