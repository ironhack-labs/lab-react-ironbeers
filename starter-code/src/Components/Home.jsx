import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/beers" className="list-group-item list-group-item-action" ><img src={"/images/beers.png"}></img><h1>All Beer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </Link>

                    <Link to={"/random-beer"} className="list-group-item list-group-item-action" ><img src={"/images/random-beer.png"}></img><h1>Random Beer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </Link>

                    <Link to={"/new-beer"} className="list-group-item list-group-item-action" ><img src={"/images/new-beer.png"}></img><h1>New Beer</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Link>    
            </div>
        );
    }
}

export default Home;