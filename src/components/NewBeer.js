import { Link } from "react-router-dom"
import "./Header.css"

function NewBeer() {
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

export default NewBeer;