import { Link } from "react-router-dom"

function HomePage(){
    return(
        <div>
            <section>
                <img src={require("../assets/beers.png")} alt={""} ></img>
                <Link to="/beers"><h1>Beers</h1></Link> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas dictum felis, non venenatis arcu congue vel. Sed at quam viverra, accumsan tortor dapibus, tristique purus.</p>
            </section>
            <section>
                <img src={require("../assets/random-beer.png")} alt="" ></img>
                <Link to="/random-beer"><h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas dictum felis, non venenatis arcu congue vel. Sed at quam viverra, accumsan tortor dapibus, tristique purus.</p>
            </section>
            <section>
                <img src={require("../assets/new-beer.png")} alt="" ></img>
                <Link to="/new-beer"><h1>New Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas dictum felis, non venenatis arcu congue vel. Sed at quam viverra, accumsan tortor dapibus, tristique purus.</p>
            </section>
        </div>
    )
}

export default HomePage