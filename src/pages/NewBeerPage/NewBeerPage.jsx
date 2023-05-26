import { Link } from "react-router-dom"
import icono from '../../assets/icono.png'
import BeerNewForm from '../../components/BeerNewForm/BeerNewForm'

const NewPage = () => {
    return (
        <>
            <header className='Header'>
                <Link to="/">
                    <img src={icono} alt="icono" />
                </Link>
            </header>
            <body>

                <BeerNewForm />

            </body>
        </>
    )
}

export default NewPage;