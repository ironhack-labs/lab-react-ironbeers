import { Link } from "react-router-dom";

function HomePage() {
    return (
        <section id="card">
            <div>
                <Link to="/beers"><h1>All Beers</h1></Link>
                <img src="src\assets\beers.png" alt="" /> <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius luctus dolor, quis dictum velit iaculis et. Vivamus dignissim feugiat augue.</p>

            </div>
            <div>
                <Link to="/random-beer"><h1>Random Beer</h1></Link>
                <img src="src\assets\beers.png" alt="" /> <br />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius luctus dolor, quis dictum velit iaculis et. Vivamus dignissim feugiat augue.</p>

            </div>
            <div>
                <Link to="/new-beer"><h1>New Beer</h1></Link>
                <img src="src\assets\beers.png" alt="" /> <br />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius luctus dolor, quis dictum velit iaculis et. Vivamus dignissim feugiat augue.</p>

            </div>

        </section >
    )
}

export default HomePage;
