import Beers from "../assets/beers.png"
import NewBeer from "../assets/new-beer.png"
import RandomBeer from "../assets/random-beer.png"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="container-fluid">
            <div className="row mx-auto col-md-8 col-lg-6">
                <img src={Beers} alt="All Beers" className="rounded-lg image-fluid" />
                <Link to="/beers"><h1 className="text-center text-body ">All Beers</h1></Link>
                <p className="text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ea soluta quae nisi est laudantium neque quod excepturi. Natus omnis ad adipisci iusto aspernatur alias rerum illo pariatur saepe autem!</p>
            </div>
            <div className="row mx-auto col-md-8 col-lg-6">
                <img src={RandomBeer} alt="Random Beer" className="rounded-lg image-fluid" />
                <Link to="/random-beer"><h1 className="text-center text-body">Random Beer</h1></Link>
                <p className="text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem perspiciatis ipsam cupiditate quam perferendis accusamus magnam eos vero veniam nostrum at, quod ad natus est quasi consequuntur id commodi.</p>
            </div>
            <div className="row mx-auto col-md-8 col-lg-6">
                <img src={NewBeer} alt="New Beer" className="rounded-lg image-fluid"/>
                <Link to="/new-beer"><h1 className="text-center text-body">New Beer</h1></Link>
                <p className="text-center mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure doloremque cumque sit minima libero, rem sunt temporibus aliquam nulla omnis? Consectetur architecto odio harum, natus tempora dolorem magni facere optio.</p>
            </div>
        </div>
    )
}

export default HomePage;
