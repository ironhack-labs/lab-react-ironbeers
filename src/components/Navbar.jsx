import { Link } from "react-router-dom";
export default function NavBar () {

    return(
        <div className="Navbar">
            {/* no me funciona el icono de la casita :( */}
            <Link to="/"><i className="fa-solid fa-house" style={{color:'white'}}></i></Link>
        </div>
    )

}