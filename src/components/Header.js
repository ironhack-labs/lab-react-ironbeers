import { Link } from 'react-router-dom';
import header from '../assets/header.png';

function Header () {
    return (
        <div className='Header'>
            <Link className='Link' to={'/'}>
                <img src={header}/>
            </Link>
        </div>
    )
}

export default Header;