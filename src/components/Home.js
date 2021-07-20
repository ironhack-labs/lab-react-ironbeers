import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Home extends Component{
	render(){
    	return (

            <div>
                <h3>
                    <Link to='/allbeers'>All Beers</Link>
                </h3>
            </div>

    	)
	}
}

export default Home