import allbeerimg from "../assets/beers.png"
import randombeerimg from "../assets/random-beer.png"
import newbeerimg from "../assets/new-beer.png"
import PicWithLorem from "./PicWithLorem"

const Homepage = () => {

return (
    <div>
        <PicWithLorem title="All Beers" image={allbeerimg} link="/beers"/>
        <PicWithLorem title="Random Beer" image={randombeerimg} link="/random-beer"/>
        <PicWithLorem title="New Beer" image={newbeerimg} link="/new-beer"/>

    </div>
)
}

export default Homepage