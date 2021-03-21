import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><img className='btn-home' src="https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1806/alekseyvanin180600602/102804045-.jpg?ver=6" alt=""/></Link>
        </div>
    )
}

export default Header