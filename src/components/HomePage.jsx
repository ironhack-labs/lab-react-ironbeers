import { Link } from 'react-router-dom'
import beer from '../assets/beers.png'
import beer2 from '../assets/new-beer.png'
import beer3 from '../assets/random-beer.png'


function HomePage() {
    return (
        <>
            <Link to="/cervezas">
                <img src={beer} alt='Cerveza' />
            </Link>
            <h2>Descubre todas nuestras cervezas</h2>
            <p>Etiam gravida nisi ac lacinia tempus. Etiam ultricies lorem in porta porttitor. Morbi quis odio enim. Duis consequat tincidunt lacinia. In hac habitasse platea dictumst. Maecenas vulputate sed lectus at fringilla. </p>
            <Link to="/random">
                <img src={beer2} alt='Grifo de cerveza' />
            </Link>
            <h2>Descubre todas nuestras cervezas</h2>
            <p>Etiam gravida nisi ac lacinia tempus. Etiam ultricies lorem in porta porttitor. Morbi quis odio enim. Duis consequat tincidunt lacinia. In hac habitasse platea dictumst. Maecenas vulputate sed lectus at fringilla. </p>
            <Link to="/nueva-cerveza">
                <img src={beer3} alt='Grifo de cerveza' />
            </Link>
            <h2>Añade una nueva cerveza</h2>
            <p>Etiam gravida nisi ac lacinia tempus. Etiam ultricies lorem in porta porttitor. Morbi quis odio enim. Duis consequat tincidunt lacinia. In hac habitasse platea dictumst. Maecenas vulputate sed lectus at fringilla. </p>
        </>
    )
}

export default HomePage
