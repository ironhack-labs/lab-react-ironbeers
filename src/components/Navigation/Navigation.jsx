import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeIcon from './../../assets/home-icon.png'

function Navigation() {

    return (

        <Navbar bg="primary" data-bs-theme="dark">

            <Container className='justify-content-center mt-2 mb-2'>

                <Link to="/">
                    <img
                        src={HomeIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Link>

            </Container>

        </Navbar>

    )

}

export default Navigation
