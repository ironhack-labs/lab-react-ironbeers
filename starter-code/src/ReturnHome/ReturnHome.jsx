import React from 'react';
import {Link} from 'react-router-dom'
import './ReturnHome.css';

export default class ReturnHome extends React.Component {
    
    render(){

        return(

            <div className='home-nav'>
                <Link to='/'>
                <h1>HOME</h1>
                </Link>
            </div>
        )

    }
    

}