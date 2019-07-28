import React from 'react';
import { Link } from 'react-router-dom';

function BeerModal(props) {
    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <div className="row no-margin">
                    <div className="col s12 center-align">
                        <img className="modal-beer-img" src={props.image_url} />
                    </div>
                </div>

                <div className="row no-margin title-col">
                    <div className="col s9">
                        <h4 className="beer-modal-title">{props.name}</h4>
                    </div>

                    <div className="col s3">
                        <p className="att-level-num">{props.attenuation_level}</p>
                    </div>
                </div>

                <div className="row no-margin">
                    <div className="col s8">
                        <p className="tagline-text">{props.tagline}</p>
                    </div>

                    <div className="col s4">
                        <p className="time-brewed">{props.first_brewed}</p>
                    </div>
                </div>

                <div className="row no-margin">
                    <div className="col s12">
                        <p className="description-text">{props.description}</p>
                    </div>
                </div>
            
                <div className="row no-margin">
                    <div className="col s12">
                        <span className="contr-text">{props.contributed_by}</span>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                {
                    props.randomRoute ?
                    <button className="btn" onClick={props.handleClick}>Close</button>
                    :
                    <Link to="/beers" className="btn" onClick={props.goToBeersRoute}>Close</Link>
                }
            </div>
        </div>
    )
}

export default BeerModal;
