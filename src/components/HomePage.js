import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return <div className="HomePage">
        <Link to="/beers">
        <img src={require("../assets/beers.png")} alt="Beers" />
            <h1>All Beers</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis porro nobis ad facere atque officiis in unde, esse hic facilis maiores, quidem odio consectetur neque dolorum vitae pariatur doloremque!</p>
        </Link>
        <Link to="/random-beer">
            <img src={require("../assets/random-beer.png")} alt="Random Beer" />
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem excepturi ullam iusto! A sapiente, exercitationem ipsam incidunt labore tempore odio consequatur? Cupiditate, unde voluptatibus quia ducimus animi nulla enim?</p>
        </Link>
        <Link to="/new-beer">
            <img src={require("../assets/new-beer.png")} alt="New Beer" />
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit veniam quibusdam in recusandae impedit repudiandae sunt tempora dolor? Dicta, cumque ipsum? Earum molestias sint sunt in dolores, dolorum aut.</p>
        </Link>
    </div>

}

export default HomePage;