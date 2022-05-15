import { Link } from "react-router-dom";


function CreateBeers() {

    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
            </header>
            <div className="create-beers">
                <h1>Create beers</h1>
            </div>
        </div>
    )
}

export default CreateBeers;