import { Link } from "react-router-dom"
import icono from '../../assets/icono.png'
import BeerRandom from "../../components/BeerRandom/BeerRandom"

const RandomPage = () => {
    return (
        <><header className='Header'>
            <Link to="/">
                <img src={icono} alt="icono" />
            </Link>
        </header>
            <body>


                <BeerRandom />


            </body></>
    )
}

export default RandomPage;