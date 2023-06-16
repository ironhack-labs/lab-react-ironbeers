import { Link } from 'react-router-dom';
import icon from '../assets/icon.jpg';

export function Header(){
    return(
       <div >
        <Link to="/"><img className='header-icon' src={icon} alt="homebutton" /></Link>
       </div>
    );
}