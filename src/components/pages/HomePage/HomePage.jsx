import { Link } from "react-router-dom";
import imageOne from "../../../assets/beers.png"
import imageTwo from "../../../assets/new-beer.png"
import imageThree from "../../../assets/random-beer.png"


const HomePage = () => {

    // hacer linkto 
    return (
        <>
            < h1 > soy la página del home</h1 >

            <img src={imageOne}></img>
            <br></br>
            <Link to="/beers">All beers</Link>

            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            <br />
            <hr></hr>

            <img src={imageThree}></img>
            <br></br>
            <Link to="/random-beer">Random beer</Link>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
            <br />
            <hr></hr>

            <img src={imageTwo}></img>
            <br></br>
            <Link to="/new-beer">New beer</Link>
            <br />
            <hr></hr>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>


        </>


    )

}








export default HomePage