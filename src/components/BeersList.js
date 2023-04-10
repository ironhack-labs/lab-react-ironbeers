import { Link } from "react-router-dom"
import "./Header.css"

function BeersList() {
    return (
        <div>
            <header className="header">
                <Link to="/">
                    HOME
                </Link>
            </header>
        </div>
    )
}

export default BeersList;