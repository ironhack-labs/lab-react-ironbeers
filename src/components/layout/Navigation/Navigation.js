import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


import home from './../../../assets/home.png'
const Navigation = () => {

    return (
        <Navbar bg="primary" variant="dark" style={{ marginBottom: '10px' }} className="justify-content-center">
            <Link to="/" ><img src={home} alt="home" className="home" /></Link >

        </Navbar >
    )
}

export default Navigation