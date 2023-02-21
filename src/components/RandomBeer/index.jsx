import { Link } from "react-router-dom"
import random from "../../assets/random-beer.png"

function RandomBeer(){
    return(
        <div className="Container">
            <Link to="/random">
                <img src={random} alt="random"></img>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis libero odio earum quasi dolorum reprehenderit quae excepturi at natus nihil officia, iste debitis incidunt dolore. Eveniet delectus soluta maiores consectetur?</p>
            </Link>
        </div>

    )
}

export default RandomBeer;