import React from 'react'
import '../styles/home.css';
import {Link} from "react-router-dom";

 class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div>
                <Link  to="/beers">
                    <img className="home-img" src="https://images.unsplash.com/photo-1527443631444-cfeaa17b56fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1503&q=80" alt="AllBeers"/>
                    <h3>All Beers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod mollitia molestiae obcaecati error, odit unde perspiciatis laborum inventore exercitationem iure debitis iste nulla amet repellat. Sed deserunt quo mollitia.Eos repellendus beatae dolor obcaecati eum, officia exercitationem facilis itaque dolorem nemo quis corrupti libero amet, praesentium rerum quas doloremque distinctio labore officiis voluptatem nam, neque est? Pariatur, architecto laborum?</p>  
                </Link>
                </div>
                <div>
                <Link  to="/random-beer">
                    <img className="home-img" src="https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="AllBeers"/>
                    <h3>Random Beer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod mollitia molestiae obcaecati error, odit unde perspiciatis laborum inventore exercitationem iure debitis iste nulla amet repellat. Sed deserunt quo mollitia.Eos repellendus beatae dolor obcaecati eum, officia exercitationem facilis itaque dolorem nemo quis corrupti libero amet, praesentium rerum quas doloremque distinctio labore officiis voluptatem nam, neque est? Pariatur, architecto laborum?</p>  
                </Link>
                <Link  to="/new-beer">
                    <img className="home-img" src="https://images.unsplash.com/photo-1586657596646-d4af5922ab47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="AllBeers"/>
                    <h3>New Beer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod mollitia molestiae obcaecati error, odit unde perspiciatis laborum inventore exercitationem iure debitis iste nulla amet repellat. Sed deserunt quo mollitia.Eos repellendus beatae dolor obcaecati eum, officia exercitationem facilis itaque dolorem nemo quis corrupti libero amet, praesentium rerum quas doloremque distinctio labore officiis voluptatem nam, neque est? Pariatur, architecto laborum?</p>  
                </Link>
                </div>
            </div>
        )
    }
}

export default Home