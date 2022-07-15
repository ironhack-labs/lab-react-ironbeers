import { Navbar, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <Navbar bg="dark">
            <Container>
                < Link to="/" >
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-home-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596056wkxtr.png&f=1&nofb=1"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Home logo"
                    />
                </Link > 
            </Container>
        </Navbar>
    )
}
export default Navigation
