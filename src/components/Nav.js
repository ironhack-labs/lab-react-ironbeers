import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import 'antd/dist/antd.css'
import { Menu } from 'antd';

class Nav extends Component{
    state = {
        current: 'mail',
      }

    render(){
        return(
            <div>
                <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                    <Menu.Item>
                    All Beers<NavLink to={`/AllBeers`}></NavLink>
                    </Menu.Item>
                    <Menu.Item>
                    Random Beer<NavLink to={`/RandomBeer`}></NavLink>
                    </Menu.Item>
                    <Menu.Item>
                    New Beer<NavLink to={`/NewBeer`}></NavLink>  
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Nav
