import { Container, Nav, Navbar } from 'react-bootstrap'


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation