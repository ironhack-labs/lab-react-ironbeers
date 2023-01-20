
import { Link } from 'react-router-dom';


export default function HomePage() {
    return (
        <>
            <img src='/assets/beers.png' alt='beers' />
            <Link to="/beers">All Beers</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam.</p>
            <img src='/assets/new-beer.png' alt='beers' />
            <Link to="/random-beer">Random Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam.</p>
            <img src='/assets/random-beer.png' alt='beers' />
            <Link to="/new-beer">New Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam.</p>
        </>
    )
}