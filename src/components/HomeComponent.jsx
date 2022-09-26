import { Link } from 'react-router-dom';
import img1 from '../assets/beers.png'
import img2 from '../assets/random-beer.png'
import img3 from '../assets/new-beer.png'

function HomeComponent() {
    return (
        <>
            <img src={img1} alt='' /><br></br>
            <Link className="btn btn-dark m-3 p-2" to="/beers">All Beers</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo officiis inventore exercitationem quae. Ab eius facere ex dignissimos doloremque labore, nesciunt sit corporis pariatur, eligendi excepturi quod ipsa expedita!</p>
            <img src={img2} alt='' /><br></br>
            <Link className="btn btn-dark m-3 p-2" to="/random-beer">Random Beer</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo officiis inventore exercitationem quae. Ab eius facere ex dignissimos doloremque labore, nesciunt sit corporis pariatur, eligendi excepturi quod ipsa expedita!</p>
            <img src={img3} alt='' /><br></br>
            <Link className="btn btn-dark m-3 p-2" to="/new-beer">New Beer</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo officiis inventore exercitationem quae. Ab eius facere ex dignissimos doloremque labore, nesciunt sit corporis pariatur, eligendi excepturi quod ipsa expedita!</p>
        </>
    )
}
export default HomeComponent