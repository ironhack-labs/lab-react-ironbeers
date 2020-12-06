import React from 'react'
import {Link} from "react-router-dom"

const HomePage = () => {
    return (
        <div>
        <Link to={"/beers"} style={{textDecoration: "none"}}>
            <div >
                <img src="../../logo192.png" alt="logo"/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tempor lorem, eget pretium nisl. Duis vel magna vitae ex tempor egestas ut non mi. Nunc a arcu vulputate, maximus ex sed, ornare felis. In nec tincidunt eros, viverra hendrerit mi.</p>
            </div>
            </Link>
            <Link to={"/random-beer"} style={{textDecoration: "none"}}>
            <div>
                <img src="../../logo512.png" alt="logo"/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tempor lorem, eget pretium nisl. Duis vel magna vitae ex tempor egestas ut non mi. Nunc a arcu vulputate, maximus ex sed, ornare felis. In nec tincidunt eros, viverra hendrerit mi.</p>
            </div>
            </Link>
            <Link to={"/new-beer"} style={{textDecoration: "none"}}>
            <div>
                <img src="../../logo192.png" alt="logo"/>
                <h1>New Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tempor lorem, eget pretium nisl. Duis vel magna vitae ex tempor egestas ut non mi. Nunc a arcu vulputate, maximus ex sed, ornare felis. In nec tincidunt eros, viverra hendrerit mi.</p>
            </div>
            </Link>
        </div>
    )
}

export default HomePage
