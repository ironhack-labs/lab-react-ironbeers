import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <ul>
            <li><Link to={'/beers'}>All Beers</Link></li>
            <li><Link to={'/random'}>Random Beer</Link></li>
        </ul >
    )
}

export default HomePage