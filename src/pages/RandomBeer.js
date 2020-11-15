import React, { Component } from 'react'
import Header from './Header';

class RandomBeer extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/ca/20/4b/cactus.jpg" alt="foto"/>
                <h1>Random Beer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa maxime rem, non ipsa, laudantium saepe, veniam voluptas earum impedit eum in excepturi deleniti quae nam maiores et sequi hic nihil.</p>
            </div>
        )
    }
}

export default RandomBeer
