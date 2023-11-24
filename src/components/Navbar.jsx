import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import house from './../assets/home-icon.png'


const Navbars = () => {

    return (


        <Navbar bg="dark" data-bs-theme="dark" className='mb-5'>
            <Container>

                <Nav className="me-auto">
                    <Link to='/'>Home</Link>

                </Nav>
            </Container>
        </Navbar>


    )

}

export default Navbars
