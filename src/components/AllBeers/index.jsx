import { Link } from "react-router-dom"
import beers from "../../assets/beers.png"

function AllBeers(){
    return(
        <div className="Container">
            <Link to="/beers">
                <img src={beers} alt="Beers"></img>
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis libero odio earum quasi dolorum reprehenderit quae excepturi at natus nihil officia, iste debitis incidunt dolore. Eveniet delectus soluta maiores consectetur?</p>
            </Link>
        </div>

    )
}

export default AllBeers;