import React, { useState } from "react"
import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"

function LayoutApp() {
    return (
        <header>
        <Link to={'/'}>
            <h1>HOME</h1>
        </Link>
        </header>
    )
}

export default LayoutApp
