import { Link } from "react-router-dom"
import beers from './../../assets/beers.png'
import newbeer from './../../assets/new-beer.png'
import randombeer from './../../assets/random-beer.png'


const HomePage = () => {

    return (
        <>

            <Link to='/beers'>
                <img src={beers} />
                <h1>All Beers</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium possimus non pariatur at obcaecati, cupiditate omnis, recusandae ex ducimus rem hic earum similique dolore quis ut quia excepturi laboriosam.</p>
            </Link>
            <Link to='/random-beer'>
                <img src={newbeer} />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis necessitatibus aliquam labore, optio tempore ad. Repudiandae quisquam animi iusto, praesentium cumque officia, suscipit esse sit tempora nostrum reprehenderit laboriosam. Delectus?</p>
            </Link>
            <Link to='/new-beer'>
                <img src={randombeer} />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem rerum aut eveniet? Repellat dolore voluptate inventore aliquid, sunt repellendus aut harum et deleniti enim labore, tempore dolorem illum magnam quae.</p>
            </Link>
        </>
    )
}

export default HomePage


