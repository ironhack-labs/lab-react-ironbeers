import { Link } from "react-router-dom"

function HomePage() {
    return (
        <section id="card">
            <div>
                <img src="src\assets\beers.png" alt="" /> <br />
                <Link to="/beers"><h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius luctus dolor, quis dictum velit iaculis et. Vivamus dignissim feugiat augue.</p>
            </div>
            <div>
                <img src="src\assets\random-beer.png" alt="" /> <br />
                <Link to="/random-beer"><h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius luctus dolor, quis dictum velit iaculis et. Vivamus dignissim feugiat augue.</p>
            </div>
            <div>
                <img src="src\assets\new-beer.png" alt="" /> <br />
                <Link to="/new-beer"><h1>New Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius luctus dolor, quis dictum velit iaculis et. Vivamus dignissim feugiat augue.</p>
            </div>
        </section>
    )
}

export default HomePage
