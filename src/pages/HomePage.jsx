import Beers from "../assets/beers.png"
import NewBeer from "../assets/new-beer.png"
import RandomBeer from "../assets/random-beer.png"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="beers-container">
            <div className="individual-beer">
                <img src={Beers} alt="All Beers" />
                <Link to="/beers"><h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea soluta quae nisi est laudantium neque quod excepturi. Natus omnis ad adipisci iusto aspernatur alias rerum illo pariatur saepe autem!</p>
            </div>
            <div className="individual-beer">
                <img src={RandomBeer} alt="Random Beer" />
                <Link to="/random-beer"><h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem perspiciatis ipsam cupiditate quam perferendis accusamus magnam eos vero veniam nostrum at, quod ad natus est quasi consequuntur id commodi.</p>
            </div>
            <div className="individual-beer">
                <img src={NewBeer} alt="New Beer" />
                <Link to="/new-beer"><h1>New Beer</h1></Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure doloremque cumque sit minima libero, rem sunt temporibus aliquam nulla omnis? Consectetur architecto odio harum, natus tempora dolorem magni facere optio.</p>
            </div>
        </div>
    )
}

export default HomePage;
