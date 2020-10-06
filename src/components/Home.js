import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <img className="beer-img" src="../img/beers.jpg" alt="beers" />
                <Link to="/beers"><h2>All Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis dolor quis risus vulputate pretium. Suspendisse at felis et odio sollicitudin aliquet. Cras non ipsum nec nibh tempus volutpat. Nullam sit amet est tempor, tristique erat eu, pharetra ligula. Sed aliquam maximus mollis.</p>
            </div>
            <div>
                <img className="beer-img" src="../img/one-beer.jpg" alt="beer" />
                <Link to="/random"><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum faucibus tempus. Integer fringilla, tortor vitae blandit auctor, arcu felis egestas tellus, vel viverra arcu enim scelerisque justo. Nullam quis massa lorem. Integer sodales ligula lorem, et commodo risus lobortis ac.</p>
            </div>
            <div>
                <img className="beer-img" src="../img/fill-beer.jpg" alt="filling a beer" />
                <Link to="/new"><h2>New Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget vestibulum quam. Integer vel ipsum et enim accumsan gravida. Mauris semper nisl ac suscipit hendrerit. Morbi tristique laoreet ex, a tempus lacus aliquet vitae.</p>
            </div>
        </div>
    )
}

export default Home