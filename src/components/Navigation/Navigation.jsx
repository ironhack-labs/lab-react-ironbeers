import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import './Navigation'

const Navigation = () => {

    return (<header className="navHome">

        <Link as='span' to='/'><img src={home} alt="Home img" /></Link>

    </header>)
}

export default Navigation