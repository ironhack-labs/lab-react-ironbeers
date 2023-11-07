import { Link } from "react-router-dom";


function HomePage(){
    return(
        <div className ="home-div">
            <Link to="/beers">
                <HomeLink imgSrc="/src/assets/beer-1.jpg" text="All Beers"/>
            </Link>
            <Link to="/random-beer">
                <HomeLink imgSrc="/src/assets/beer-2.jpg" text="Random Beer"/>
            </Link>
            <Link to="/new-beer">
                <HomeLink imgSrc="/src/assets/beer-4.png" text="New Beer"/>
            </Link>
        </div>
    )
}


function HomeLink({imgSrc, text }){
    return (
        <div className="home-link-cont">
            <h2>{text}</h2>
            <img src={imgSrc} alt="" />
        </div>
    )
}

export default HomePage;
