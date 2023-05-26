import { Link } from "react-router-dom"

const imgURL = "http://lh5.ggpht.com/_9F9_RUESS2E/SpV5Yi8Vv5I/AAAAAAAAA4E/W9-J8eMLokM/s800/50-Cool-and-Creative-404-Error-Pages-25.jpg";

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to="/">Home</Link>
            <hr />
            <img src={imgURL} alt="404 error gif" className="page-img" />
        </div>
    )
}

export default ErrorPage