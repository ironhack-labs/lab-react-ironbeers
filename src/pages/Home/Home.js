import React from 'react';
import { Link } from 'react-router-dom';
import HomeComponent from '../../components/HomeComponent/HomeComponent';
import "./Home.css";

export default function Home() {
    return (
        <div>
            <Link to="/beers">
                <HomeComponent image="https://res.cloudinary.com/dkevcmz3i/image/upload/v1620395236/samples/beers_ptxlo7.png" title="All beers" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius porta iaculis. Phasellus ornare magna nec orci euismod lobortis. Integer suscipit feugiat enim, non fermentum metus." />
            </Link>
            <Link to="/random">
                <HomeComponent image="https://res.cloudinary.com/dkevcmz3i/image/upload/v1620395236/samples/random-beer_hb2pyq.png" title="Random beers" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius porta iaculis. Phasellus ornare magna nec orci euismod lobortis. Integer suscipit feugiat enim, non fermentum metus." />
            </Link>
            <Link to="/new-beer">
                <HomeComponent image="https://res.cloudinary.com/dkevcmz3i/image/upload/v1620395236/samples/new-beer_z5xjrq.png" title="New beer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius porta iaculis. Phasellus ornare magna nec orci euismod lobortis. Integer suscipit feugiat enim, non fermentum metus." />
            </Link>
        </div>
    )
}
