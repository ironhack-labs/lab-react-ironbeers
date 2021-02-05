import React from 'react';
import { Link } from 'react-router-dom';
import './HomeMenu.css'
import imgAll from '../assets/beers.png'
import imgRandom from '../assets/random-beer.png'
import imgNew from '../assets/new-beer.png'

export default function HomeMenu() {
    return (
        <div className="HomeMenu">
            <Link to="/beers" className="menu-item">
                <img src={imgAll} alt="Beer Pub" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae diam in tellus convallis mattis. Aenean tristique, libero quis blandit viverra, sem tortor volutpat leo, nec suscipit purus magna nec metus.</p>
            </Link>
            <Link to="/random-beer" className="menu-item">
                <img src={imgRandom} alt="Beer Taps" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae diam in tellus convallis mattis. Aenean tristique, libero quis blandit viverra, sem tortor volutpat leo, nec suscipit purus magna nec metus.</p>
            </Link>
            <Link to="/new-beer" className="menu-item">
                <img src={imgNew} alt="Beer" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae diam in tellus convallis mattis. Aenean tristique, libero quis blandit viverra, sem tortor volutpat leo, nec suscipit purus magna nec metus.</p>
            </Link>
        </div>
    )
}
