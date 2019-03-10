import React from 'react';
import Header from '../components/misc/Header';


const DetailedBeer = (props) =>{
         
                return (
                    <div className="container">
                        <Header/>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={props.image_url} alt="Beer" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{props.name}</p>
                                        <p className="subtitle is-6">{props.tagline}</p>
                                    </div>
                                    <div className="media-right">
                                        <strong><h2 className="is-6 margin-0" >{props.attenuation_level}</h2></strong>
                                        <small>{props.first_brewed}</small>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>{props.description}</p>

                                    <small>{props.contributed_by}</small>

                                </div>
                            </div>
                        </div>
                    </div>

                )
    }        
        
export default DetailedBeer;
