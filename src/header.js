import React from 'react'; 
import { Link } from 'react-router-dom'; 
import homeImg from './assets/home.png';

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'><img src={homeImg} alt='header' className='header-image' /></Link>
                </li>
            </ul>
        </div>
    )
}