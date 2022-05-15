import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="HomePage" >
            <img style={{ maxHeight: "20vh", objectFit: 'contain' }} src={"https://github.com/JeanDenisD/lab-react-ironbeers/blob/master/src/assets/beers.png?raw=true"} alt="beers-list" />
            <Link to="/beers">All beers</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img style={{ maxHeight: "20vh", objectFit: 'contain' }} src={"https://github.com/JeanDenisD/lab-react-ironbeers/blob/master/src/assets/new-beer.png?raw=true"} alt="random-beer" />
            <Link to="/random-beer">random beer</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img style={{ maxHeight: "20vh", objectFit: 'contain' }} src={"https://github.com/JeanDenisD/lab-react-ironbeers/blob/master/src/assets/random-beer.png?raw=true"} alt="new0beer" />
            <Link to="/new-beer">new beer</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default HomePage