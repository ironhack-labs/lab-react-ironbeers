import { Link } from "react-router-dom";
//import "./index.css"

function HomePage() {
    return (
        <div>
        <Link className="link" to="/beers">All Beers</Link>
        <Link className="link" to="/random-beer">Surprise me</Link>
        <Link className="link" to="/new-beer">Add new beer</Link>
        </div>
    )
}
export default HomePage;
