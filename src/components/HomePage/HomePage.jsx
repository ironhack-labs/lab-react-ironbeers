
import { Link } from "react-router-dom"
import AllBeersCard from "../AllBeersCard/AllBeersCard"
import CardBeerImg from "../../assets/beers.png"
import CardRandomImg from "../../assets/random-beer.png"
import CardNewImg from "../../assets/new-beer.png"
const HomePage = () => {
    return (
        <>
            
            <Link className="text" to='/beers' >
                <AllBeersCard
                    img={CardBeerImg}
                    title='AllBeers'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui numquam necessitatibus vitae doloremque veniam et fuga ullam, eaque dicta dignissimos eos recusandae, error quos totam explicabo quaerat'
                />
            </Link>
            <Link className="text" to='/random-beer' >
                <AllBeersCard
                    img={CardRandomImg}
                    title='Random'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui numquam necessitatibus vitae doloremque veniam et fuga ullam, eaque dicta dignissimos eos recusandae, error quos totam explicabo quaerat'
                />
            </Link>
            <Link className="text" to='/new-beer' >
                <AllBeersCard
                    img={CardNewImg}
                    title='New Beer'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore qui numquam necessitatibus vitae doloremque veniam et fuga ullam, eaque dicta dignissimos eos recusandae, error quos totam explicabo quaerat'
                />
            </Link>
        </>

    )

}
export default HomePage