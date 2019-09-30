import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component{


    render(){
        return (
            <div>
                 <h3><Link to="/">Home</Link></h3>
            </div>
        )
    }
}

export default Navbar;