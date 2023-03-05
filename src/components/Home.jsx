import img1 from "../assets/beers.png"
import img2 from "../assets/random-beer.png"
import img3 from "../assets/new-beer.png"

import { Link } from "react-router-dom"
function Home() {
  
  return (
    <div>
        <Link to="/beers"><img src={img1} alt="balcony beers" className="page-img"/><br />
        Home
        </Link>
        <hr />
        <Link to="/random"><img src={img2} alt="balcony beers" className="page-img"/><br />
        Random Beer
        </Link>
        <hr />
        <Link to="/new"><img src={img3} alt="balcony beers" className="page-img"/><br />
        New Beer
        </Link>
    </div>
  )
}

export default Home;