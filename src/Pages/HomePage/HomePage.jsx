import { Link } from "react-router-dom"
import homeImg from "../../assets/beers.png"
import randomImg from "../../assets/random-beer.png"
import newImg from "../../assets/new-beer.png"


const HomePage = () => {

    return (
        <>

            <h1>Homepage</h1>
            <Link to="/beers">
                <div className="mainCard" >
                    <img src={homeImg} alt="main beers" />
                    <h2>All Beers</h2>
                    <p>Go and check all our incredible beers!! ijbvrjajjnvhkraebrekjbvejav f </p>

                </div>
            </Link>
            <Link to="/random-beer">
                <div className="mainCard" >
                    <img src={randomImg} alt="main beers" />
                    <h2>Random Beer</h2>
                    <p>Go and check a n incredible random beer!! ijbvrjajjnvhkraebrekjbvejav f </p>

                </div>
            </Link>
            <Link to="/new-beer">
                <div className="mainCard" >
                    <img src={newImg} alt="main beers" />
                    <h2>New Beer</h2>
                    <p>Go and do something wit a new beer!!! ijbvrjajjnvhkraebrekjbvejav f </p>

                </div>
            </Link>
        </>
    )
}

export default HomePage