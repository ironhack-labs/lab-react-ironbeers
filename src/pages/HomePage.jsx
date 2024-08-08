import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div className="homePageDiv">
            <div className="sectionDiv">
                <img src="https://cdn.tasteatlas.com/images/ingredients/59b821c633d040ca91242b62b6bde0e4.jpg?m=facebook" alt="" />
                <p><Link to="/beers">Check our variety of beers</Link></p>
                <p>All our beers are specially crafted to satisfy the most exquisite tastes.</p>
            </div>

            <div className="sectionDiv">
                <img src="https://www.zippsliquor.com/wp-content/uploads/2021/10/Texas-beers.jpg" alt="" />
                <p> <Link to="/random-beer">Random beer</Link></p>
                <p>Let´s play a game. If you like all our beers and don´t know which one choose, dont worry click the button and we will pick for you.</p>
            </div>

            <div className="sectionDiv">
                <img src="https://media.istockphoto.com/id/1157099471/photo/three-beer-bottles-in-bucket-full-of-ice-cubes-field.jpg?s=612x612&w=0&k=20&c=YFfFBcnXmjWzPhmZ-F5BDlMbwBeUMOeKesFqXllRuUc=" alt="" />
                <p><Link to="/new-beer">Create beer</Link></p>
                <p>Give it a try and create your own beer!!!</p>
            </div>
        </div>
    )

}

export default HomePage;
