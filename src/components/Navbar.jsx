import homeLogo from "../assets/home-icon.png"

function Navbar(props) {
    return (
        <nav className='navbar navbar-dark bg-primary mb-3'>
            <div className='container justify-content-center'>
                <a className="navbar-brand" href="/">
                    <img src={homeLogo} alt="Home icon" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
