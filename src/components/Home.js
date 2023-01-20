import { NavLink } from "react-router-dom";
import "./Home.css"
import beers from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png";

function Home() {

    return (
        <nav>
            <div className="card">
                <img src={beers} alt="" />
                <NavLink to="/beers">All Beers</NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue neque quis lectus maximus, semper semper orci consectetur. Etiam in mauris luctus, iaculis arcu eget, hendrerit felis.</p>
            </div>

            <div className="card">
                <img src={randombeer} alt="" />
                <NavLink to="/random-beer">Random Beers</NavLink>
                <p>Pellentesque varius molestie diam ut dignissim. Phasellus in posuere risus, at finibus sem. Proin ullamcorper sagittis tellus ut blandit. Aliquam ut elementum quam. Donec et rhoncus quam, vitae elementum nisl. In id mauris non purus ultrices ornare. Ut sit amet blandit metus. </p>
            </div>

            <div className="card">
                <img src={newbeer} alt="" />
                <NavLink to="/new-beer">New Beers</NavLink>
                <p>Ut placerat sem et sodales sagittis. Aliquam orci tortor, viverra sed molestie eget, dignissim id nunc. Aliquam sem nibh, dictum eget pulvinar ac, tincidunt ac justo. Sed luctus eros at mauris feugiat blandit. Donec porttitor consequat lacus, laoreet egestas magna posuere quis.</p>
            </div>
        </nav>

    )
}

export default Home;