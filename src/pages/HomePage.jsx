import { Link } from "react-router-dom";
import allBeers from "../assets/beers.png";
import randomBeers from "../assets/random-beer.png";
import newBeer from '../assets/new-beer.png'



function HomePage() {
    return (
        <ul className="homePageList">
            <li>
                <Link to='/beers'>
                    <img src={allBeers} alt="allBeers" /> 
                    <h2>All Beers</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti iure dolorem cupiditate quam, consectetur quibusdam beatae, eveniet natus enim similique saepe? Omnis labore sapiente deserunt quam alias iusto iure tempora.
                    </p>
                </Link>
            </li>
            <li>
                <Link to='/random-beer'>
                    <img src={randomBeers} alt="randomBeers" />
                    <h2>Random Beer</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestias placeat ut, reprehenderit, laborum sequi inventore corrupti animi fugit minus officiis id, dignissimos aspernatur debitis! Eos nemo neque iure blanditiis.
                    </p>
                </Link>
            </li>
            <li>
                <Link to='/new-beer'>
                    <img src={newBeer} alt="newBeer" />
                    <h2>New Beer</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum exercitationem, eum doloribus tempore ea mollitia accusamus dolore officia nam perspiciatis ipsum dolor delectus saepe quae ex tenetur molestiae fuga culpa!
                    </p>
                </Link>
            </li>
        </ul>
    )
}

export default HomePage;
