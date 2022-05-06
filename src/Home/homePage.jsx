import beer1 from './../assets/beers.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>

            <h1>probando home</h1>
            <img src={beer1}></img>
            <Link to={'/beers'}>hijoputa</Link>


            <h1>probando home</h1>
            <img src={beer1}></img>
            {/* <Link to{}></Link> */}

            <h1>probando home</h1>
            <img src={beer1}></img>
            {/* <Link to{}></Link> */}
            
        </div>
    )
}

export default Home