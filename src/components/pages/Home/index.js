import React from 'react'
import { Link } from 'react-router-dom'
import allBeersImage from '../../../assets/beers.png';
import randomBeerImage from '../../../assets/random-beer.png';
import newBeerImage from '../../../assets/new-beer.png';

const Home = () =>{
    return (
        <>
            <section>
                <img src={allBeersImage} alt="allbeers" />
                <Link to='/beers'>All Beers</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nisl nibh. Etiam sollicitudin tincidunt lorem sit amet malesuada. In hac habitasse platea dictumst. Vivamus vitae lacinia nisl. Quisque nec felis at enim congue cursus. In finibus eu mauris et semper. Nullam dapibus pulvinar orci, sed aliquet nisl elementum ac.</p>
            </section>
            <section>
                <img src={randomBeerImage} alt="random-beer" />
                <Link to='/random-beer'>Random Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nisl nibh. Etiam sollicitudin tincidunt lorem sit amet malesuada. In hac habitasse platea dictumst. Vivamus vitae lacinia nisl. Quisque nec felis at enim congue cursus. In finibus eu mauris et semper. Nullam dapibus pulvinar orci, sed aliquet nisl elementum ac.</p>
            </section>
            <section>
                <img src={newBeerImage} alt="new-beer" />
                <Link to='/new-beer'>New Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nisl nibh. Etiam sollicitudin tincidunt lorem sit amet malesuada. In hac habitasse platea dictumst. Vivamus vitae lacinia nisl. Quisque nec felis at enim congue cursus. In finibus eu mauris et semper. Nullam dapibus pulvinar orci, sed aliquet nisl elementum ac.</p>
            </section>
        </>
    )
}

export default Home