import { Link } from "react-router-dom"

function Header(){
    return(
        <header className="Header" style={{backgroundColor: "grey"}}>
            <Link to="/"><img style={{ maxHeight: "5vh", objectFit: 'contain'}} src="https://mpng.subpng.com/20200116/apx/samsung-beer-mug-emoji.jpg" alt="Home"></img></Link>
        </header>
    )
}

export default Header