import React from "react"
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap"


const Header = () => {

    return (
        <Link className="nav-link" to="/">
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    Home
                </Button>
            </div>
        </Link>

    )
}

export default Header