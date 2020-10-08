import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <div><img src="https://i.pinimg.com/originals/3d/b7/5c/3db75c9c920cdafb2b4f41dea0462548.jpg" alt="All Beers" /><NavLink exact to="/beers"><h1>All Beers</h1></NavLink> </div>
                <div><img src="https://lh3.googleusercontent.com/proxy/PwZ8xnEiCmIfMqy9Px5HYrAXaD3UYPlycD1bPagWMukMd4SqCEOSRalni0YFpn2dSl4rAVjNsHRuSos_d_V1jKC5kDMacFANfJidVqJpJsu5Dmfmb8d91DYhx4GL6pM_eE1b8ssjK9SA5JFLQOJx_Z5jzpIDPR9_R32J9MeP6wag" alt="Random Beer" /><NavLink exact to='/random-beer'><h1>Random Beer</h1></NavLink></div>
                <div><img src="https://rlv.zcache.com/create_your_own_beer_bottle_label_4_x_3_5-r6baeaa8b1e284ab5a693e85a95fe1555_khoij_704.jpg?rlvnet=1" alt="New Beer" /><NavLink exact to="/new-beer"><h1>Create Beer</h1></NavLink></div>
            </div>
        )
    }
}

export default Home
