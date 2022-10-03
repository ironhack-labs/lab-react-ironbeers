import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/'>&#x2302;</Link>
            
        </div>
    )
}

export default Header