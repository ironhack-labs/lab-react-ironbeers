import { Link } from "react-router-dom";


function Beers() {

    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
            </header>
            <div className="beers">
                <h1>List of beers</h1>
            </div>
        </div>
    )
}

export default Beers;