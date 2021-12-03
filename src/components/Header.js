import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <div>
                <Link className="link" to={`/`}>Home</Link>
            </div>
        </div>
    )
}
