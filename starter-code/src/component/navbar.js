import React, {Component} from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div>
            <p><Link to='/'>Maison</Link></p>
            </div>
        )
    }
}

export default NavBar;