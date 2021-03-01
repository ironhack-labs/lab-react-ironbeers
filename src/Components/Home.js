import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    
    
    
    render() {
        return (
            <div>
            <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, adipisci? Repellat officia, molestias maxime recusandae, deserunt, incidunt laboriosam modi fuga unde voluptatum molestiae saepe aspernatur magni blanditiis odio id dolore.</p>
                 <Link to="/beers">Beers</Link>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum deleniti nesciunt consectetur. Veritatis sit accusamus culpa, excepturi ipsa eum dicta velit accusantium vel tempora corrupti esse, dolor nostrum laudantium mollitia.</p>
                 <Link to="/random-beer">Random Beer</Link>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat provident impedit itaque quo quam suscipit expedita, voluptatum non! Earum dicta qui deleniti facilis placeat iusto corrupti expedita commodi ab perspiciatis.</p>
                 <Link to="/new-beer">New Beer</Link>
            </div>
        )
    }
}
