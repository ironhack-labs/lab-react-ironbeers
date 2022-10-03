import {Routes,Route,Link} from 'react-router-dom'


function Header(){
    return(
        <div id='header'>
            <Link to='/' style={{textDecoration: 'none'}}><h1>Home</h1></Link>
        </div>
    )
}

export default Header;