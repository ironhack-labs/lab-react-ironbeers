import './HeaderBeers.css'
import { Link } from 'react-router-dom';
import home from '../../assets/home.svg'

const HeaderBeers = () => {
    return(
        <div className='container-header'>
            <Link to={'/'}><img src={home} alt='homeImage'/></Link>
        </div>
    );
};

export default HeaderBeers;