import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
            <section>
                <div>
                    <Link to="/beers">
                        <img></img>
                        <p>AllBeers</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum est vel provident, sint cum itaque quos fugit, tenetur consequuntur quae eveniet suscipit. Ex animi doloremque dolores molestiae consequatur nam atque!</p>
                    </Link>
                </div>
                <div>
                <Link to="/random-beer">Inicio</Link>
                </div>
                <div>
                    <Link to="/new-beer">Inicio</Link>
                </div>
            </section>
        )
}

export default Home