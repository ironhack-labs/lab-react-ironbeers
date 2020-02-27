import React from 'react'

import { Link } from 'react-router-dom'

class HomePage extends React.Component {



    render() {
        return (
            <div className='home'>

                <div>
                    <Link to='/beers'>
                        <img src="../images/beers.png" alt="beers" />
                        <h1>Beers.</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste rerum sit labore provident consequatur tenetur dolor, doloribus, libero amet similique quisquam corrupti, culpa numquam dicta voluptas eos sed quidem?</p>
                </div>

                <div>
                    <Link to='/random'>
                        <img src="../images/random-beer.png" alt="random-beers" />
                        <h1>Random beer.</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste rerum sit labore provident consequatur tenetur dolor, doloribus, libero amet similique quisquam corrupti, culpa numquam dicta voluptas eos sed quidem?</p>
                </div>

                <div>
                    <Link to='/new'>
                        <img src="../images/new-beer.png" alt="new-beers" />
                        <h1>New beer.</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste rerum sit labore provident consequatur tenetur dolor, doloribus, libero amet similique quisquam corrupti, culpa numquam dicta voluptas eos sed quidem?</p>
                </div>
            </div>
        );
    }
}

export default HomePage;