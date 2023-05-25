import { Link } from "react-router-dom"
import imgBeers from '../../assets/beers.png'
import imgRandom from '../../assets/random-beer.png'
import imgNew from '../../assets/new-beer.png'

function HomePage() {

    return (
        <div className='container'>
            <h1>IronBeers</h1>
            <hr />
            <div className="row">
                <div className="col-5" >
                    <div className="list-group">
                        <Link to="/beers" className="list-group-item list-group-item-action">
                            <img src={imgBeers} />
                            <h1>All Beers</h1>
                        </Link>
                        <hr />
                        <Link to="/random-beer" className="list-group-item list-group-item-action">
                            <img src={imgRandom} />
                            <h1>Random Beer</h1>
                        </Link>
                        <hr />
                        <Link to="/new-beer" className="list-group-item list-group-item-action">
                            <img src={imgNew} />
                            <h1>New Beer</h1>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomePage