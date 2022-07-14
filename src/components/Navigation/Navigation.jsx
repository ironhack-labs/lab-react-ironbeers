import { Nav, Container } from 'react-bootstrap'

const NavBar = () => {

    return (
        <Container>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/beers">Cervezas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/random-beer">Cerveza aleatoria</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/new-beer">Registar nueva cerveza</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )

}

export default NavBar