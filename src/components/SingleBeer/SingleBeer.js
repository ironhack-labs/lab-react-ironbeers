import React from 'react';
import axios from 'axios';
import useAxios from 'axios-hooks';
import StatusScreen from '../StatusScreen/StatusScreen';
import './SingleBeer.css';

export default function SingleBeer({match}) {
    const [{ data, loading, error }] = useAxios(`https://ih-beers-api2.herokuapp.com/beers/${match.params.id}`);
    if (loading) {return <div><StatusScreen loading={true}/></div>}
    else if (error) {return <div><StatusScreen error={true}/></div>}
    console.log(data)
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={data.image_url} alt={data.name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{data.name}</p>
                        <p className="subtitle is-6"></p>
                    </div>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </div>
            </div>
        </div>
    );
}
