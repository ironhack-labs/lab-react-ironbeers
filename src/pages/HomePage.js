import allBeerPic from "../assets/beers.png"
import randomBeerPic from "../assets/random-beer.png"
import newBeerPic from "../assets/new-beer.png"

function HomePage () {
    return (
        <div>
            <img src={allBeerPic} alt="All Beers" />
            <h1>All Beers</h1>
            <p>Look at all our beers</p>
            <br />
            <img src={randomBeerPic} alt="Random Beer" />
            <h1>Random Beer</h1>
            <p>Get at a random beer</p>
            <br />
            <img src={newBeerPic} alt="New Beer" />
            <h1>New Beer</h1>
            <p>Create a new beer</p>

        </div>
    )
}

export default HomePage