import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <Container fluid style={{ backgroundColor: '#3B3D3B', height: '3rem' }}>
                <Link to="/"><FaHome style={{ color: 'white', height: '3rem', width: '2rem' }} /></Link>
            </Container>
        </>
    )
}

export default Navbar; 