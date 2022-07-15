import {  Navbar, Container } from 'react-bootstrap'

const Navigation = () => {

    return (
        <Navbar bg="dark" expand="md" variant="dark" className='mb-5'>
            <Container>
                <Navbar.Brand href='/'>IronBeers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    )
}

export default Navigation