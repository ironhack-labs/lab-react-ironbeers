import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

return (
    <div>
    <div>
        <Link to={'/beers'}>
        <img src="../images/beers.png" alt="img" /> 
        <h3>All Beers</h3>
        <p>Vivamus erat libero, feugiat in dignissim nec, congue vel ante. Etiam molestie, enim sit amet pellentesque vulputate, diam nibh tempus mauris, in suscipit nisi tortor at sem. Praesent sem odio, gravida eu imperdiet non, dignissim non velit. Aliquam at egestas diam. Nullam congue consequat elit, id tristique dui fermentum id. Suspendisse potenti. Cras feugiat ligula sit amet velit egestas, a scelerisque orci tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Link>

        <Link to={'/random-beer'}>
        <img src="../images/random-beer.png" alt="img" /> 
        <h3>Random Beer</h3>
        <p>Vivamus erat libero, feugiat in dignissim nec, congue vel ante. Etiam molestie, enim sit amet pellentesque vulputate, diam nibh tempus mauris, in suscipit nisi tortor at sem. Praesent sem odio, gravida eu imperdiet non, dignissim non velit. Aliquam at egestas diam. Nullam congue consequat elit, id tristique dui fermentum id. Suspendisse potenti. Cras feugiat ligula sit amet velit egestas, a scelerisque orci tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Link>

        <Link to={'/new-beer'}>
        <img src="../images/new-beer.png" alt="img" /> 
        <h3>New Beer</h3>
        <p>Vivamus erat libero, feugiat in dignissim nec, congue vel ante. Etiam molestie, enim sit amet pellentesque vulputate, diam nibh tempus mauris, in suscipit nisi tortor at sem. Praesent sem odio, gravida eu imperdiet non, dignissim non velit. Aliquam at egestas diam. Nullam congue consequat elit, id tristique dui fermentum id. Suspendisse potenti. Cras feugiat ligula sit amet velit egestas, a scelerisque orci tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Link>
        
    </div>

    </div>
)
}

export default Home;