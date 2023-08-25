import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <section>
                <img src="../src/assets/beers.png" alt="" />
                <Link to={"/beers"}>All Beers</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo voluptates odit modi. Amet quae cupiditate soluta, voluptates asperiores impedit ea dolorem libero dicta, laudantium debitis possimus eos dolor totam.</p>
            </section>
            <section>
                <img src="../src/assets/random-beer.png" alt="" />
                <Link to={"/random-beer"}>Random Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo voluptates odit modi. Amet quae cupiditate soluta, voluptates asperiores impedit ea dolorem libero dicta, laudantium debitis possimus eos dolor totam.</p>
            </section>
            <section>
                <img src="../src/assets/new-beer.png" alt="" />
                <Link to={"/new-beer"}>New Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo voluptates odit modi. Amet quae cupiditate soluta, voluptates asperiores impedit ea dolorem libero dicta, laudantium debitis possimus eos dolor totam.</p>
            </section>
        </div>
    )
}

export default HomePage;
