import { Link } from "react-router-dom"
import newbeer from "../../assets/new-beer.png"

function NewBeer(){
    return(
        <div className="Container">
            <Link to="/new-beer">
                <img src={newbeer} alt="Beers"></img>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis libero odio earum quasi dolorum reprehenderit quae excepturi at natus nihil officia, iste debitis incidunt dolore. Eveniet delectus soluta maiores consectetur?</p>
            </Link>
        </div>

    )
}

export default NewBeer;