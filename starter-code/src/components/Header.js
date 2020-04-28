import React from 'react'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render(){
        return (
            <div>
                {window.location.pathname !== '/' &&
                    <header className="header">
                        <Link className="link-homepage" to="/">
                            <img src="/images/homeicon1.png" />
                        </Link>
                    </header>
                }
            </div>
        )
    }
}

export default withRouter(Header);