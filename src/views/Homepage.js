import React from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div>
                < Link to={"/beers"} >
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus accusantium placeat rerum voluptas corrupti distinctio veniam repudiandae consequatur eaque at, autem eum dicta et error libero. Sint, libero.</p>
                </Link>
                </div>
                <div>
                < Link to={"/random-beer"} >
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus accusantium placeat rerum voluptas corrupti distinctio veniam repudiandae consequatur eaque at, autem eum dicta et error libero. Sint, libero.</p>
                </Link>
                </div>
                <div>
                < Link to={"/new-beer"} >
                    <h1>Create a beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto voluptatibus accusantium placeat rerum voluptas corrupti distinctio veniam repudiandae consequatur eaque at, autem eum dicta et error libero. Sint, libero.</p>
                </Link>
                </div>
            </div>
        )
    }
}