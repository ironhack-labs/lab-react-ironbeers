import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div>
                <Link to='/beers'><img src='https://backoftheferry.files.wordpress.com/2014/09/image3.jpeg' alt="beers" className="images"/>All Beer</Link>                
                <Link to='/random-beers'><img src='https://backoftheferry.files.wordpress.com/2014/09/image3.jpeg'alt="random-beer" className="images"/>Random Beer</Link>
                <Link to='/new-beer'><img src='https://backoftheferry.files.wordpress.com/2014/09/image3.jpeg' alt="new-beer" className="images"/>New Beer</Link>
            </div>
        )
    }
}


export default Homepage;