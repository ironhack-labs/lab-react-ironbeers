import { Navbar, Container} from "react-bootstrap"
import { Link } from "react-router-dom"

const WithNavbar = (props) => {
    return (
        <div>
            <Navbar bg="primary" style={{marginBottom: "30px"}}>
                <Container>
                    <Navbar.Brand className="m-auto">
                        <Link to={"/"}>
                            <img src="../assets/Home-icon.png" style={{ width: "70px" }} />
                        </Link>

                    </Navbar.Brand>
                </Container>
            </Navbar>
            {props.children}
        </div>
        
    )
}

export default WithNavbar