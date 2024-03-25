import {Link} from "react-router-dom";
//import beers from "./../assets/beers.png"
//import random-beer from "./../assets/random-beer.png"
//import new-beer from './../assets/new-beer.png'

function HomePage() {
    return(
        <div className="HomePage">
        <h1>Homepage</h1>
        <ul>
        <img src={"./src/assets/beers.png"} alt="beer-img"></img>
            <li>
            
            <Link to={'/beers'}> All Beers</Link>
            <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
  </p>
            </li>
            <img src={"./src/assets/random-beer.png"} alt="random-beer-img"></img>
            <li><Link to={'/random-beer'}> Random Beer</Link></li>
            <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
  </p>
            <img src={"./src/assets/new-beer.png"} alt="new-beer-img"></img>
            <li><Link to={'/new-beer'}>New Beer</Link></li>
            <p>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
  </p>
        </ul>
    </div>
    )
}

export default HomePage;
