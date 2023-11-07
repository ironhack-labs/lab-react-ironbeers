import {Link} from "react-router-dom";
function HomePage() {
    return(
        <div>
            <Link to="/beers" />
            <Link to="/random-beer" />
            <Link to="/new-beer" />
        </div>
    )
}

export default HomePage;
