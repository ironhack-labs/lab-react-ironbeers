import React from "react";
import {Link} from "react-router-dom";
import allBeer from '../assets/beers.png'
import RandomBeer from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'


const Home = () => {
  return (
            <section>
            
                <div>
                    <Link to="/beers">
                        <img src={allBeer} alt='xd'/>
                        <span className='CabecerLink'>AllBeers</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum est vel provident, sint cum itaque quos fugit, tenetur consequuntur quae eveniet suscipit. Ex animi doloremque dolores molestiae consequatur nam atque!</p>
                    </Link>
                </div>
                <div>
                <Link to="/random-beer">
                        <img src={RandomBeer} alt='xd'/>
                        <span className='CabecerLink'>RandomBeer</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum est vel provident, sint cum itaque quos fugit, tenetur consequuntur quae eveniet suscipit. Ex animi doloremque dolores molestiae consequatur nam atque!</p>
                </Link>
                </div>
                <div>
                    <Link to="/new-beer">
                        <img src={NewBeer} alt='xd'/>span
                        <span className='CabecerLink'>NewBeer</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum est vel provident, sint cum itaque quos fugit, tenetur consequuntur quae eveniet suscipit. Ex animi doloremque dolores molestiae consequatur nam atque!</p>
                    </Link>
                </div>
            </section>
        )
}

export default Home