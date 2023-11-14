import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <Link to="/beers">All Beers</Link>
        <Link to="/random-beer">Surprise me</Link>
        <Link to="/new-beer">Add new beer</Link>
        </>
    )
}
export default HomePage;
