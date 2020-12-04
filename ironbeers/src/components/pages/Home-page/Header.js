import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <>
            <Link to={"/"} >
                <div className="navbar">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/568/450/non_2x/home-icon-vector.jpg" />
                </div>
            </Link>
        </>

    )
}

export default Header