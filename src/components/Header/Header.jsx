import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="blueHeader">
            <Link to='/'>
                <p>home</p>
            </Link>
        </header>
    )
}

export default Header 