
import { NavLink} from 'react-router-dom';
import home from '../assets/pngwing.com.png'


const Navbar = () => {
    return (
        <div style={{alignItems: 'center', height: 'fit-content', backgroundColor:'lightblue' }}>
            <NavLink to='/'>
            <img src={home} alt='home' style={{ width: 40}} />
            </NavLink>

        </div>
    );
}

export default Navbar;