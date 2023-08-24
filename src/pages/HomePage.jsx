import { Link } from "react-router-dom";



function HomePage() {

    return (
        <div className="container">

            <Link to='/beers' className="row col-12">
                <img src='src/assets/beers.png' alt="" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, saepe voluptas. Dolorem iusto, incidunt ipsum eveniet
                    repellendus dolor commodi quasi, ratione optio vel quaerat in earum quis ut voluptatum pariatur?</p>
            </Link >

            <Link to='/random-beer' className="row col-12">
                <img src='src/assets/random-beer.png' alt="" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, saepe voluptas. Dolorem iusto, incidunt ipsum eveniet
                    repellendus dolor commodi quasi, ratione optio vel quaerat in earum quis ut voluptatum pariatur?</p>
            </Link >

            <Link to='/new-beer' className="row col-12">
                <img src='src/assets/random-beer.png' alt="" />
                <h1>New Beer</h1>
                <p>Lorem ipsusm dolor sit amet consectetur, adipisicing elit. Nihil, saepe voluptas. Dolorem iusto, incidunt ipsum eveniet
                    repellendus dolor commodi quasi, ratione optio vel quaerat in earum quis ut voluptatum pariatur?</p>
            </Link >

        </div>
    )

}

export default HomePage;
