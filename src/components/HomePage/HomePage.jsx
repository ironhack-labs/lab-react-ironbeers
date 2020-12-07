import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to="/beers">
                <h1>Beers</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim suscipit illo quasi excepturi placeat ipsa ut possimus rerum libero officiis. Soluta odio aliquid culpa assumenda deleniti quo consectetur dolores omnis?</p>
            </Link>
            <br />
            <Link to="/random-beer"><h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora voluptatibus quia debitis enim suscipit dolor aperiam praesentium inventore, facere pariatur quibusdam esse aspernatur quasi beatae accusamus, nam reiciendis velit?</p></Link>
            <br />
            <Link to="/new-beer"><h1>New Beer</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur voluptatibus quidem officiis illum quibusdam ab. Nihil, iure, voluptate excepturi sit molestiae suscipit beatae voluptates quisquam vero maxime dignissimos asperiores ratione.</p> </Link>
        </div>
    )
}

export default HomePage

