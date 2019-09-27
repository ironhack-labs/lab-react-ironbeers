import React, {Component} from 'react'
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import Home from './component/Home'
import axios from 'axios'
import Beers from './component/Beers'
import Single from './component/Single'
import Add from './component/Add'


const {Header, Footer} = Layout

class Router extends Component{
    state={
        beers: [],
        from: 0,
        to: 10
    }


    componentDidMount = async () => {
        const {data: beers} = await axios.get('https://ih-beer-api.herokuapp.com/beers')

        this.setState(()=>{
            return {beers}
        })
    }

    handleChange = value =>(
        this.setState(()=>{
            const from = value *9
            const to = value*9+10

            return {from, to}
        })
    )
    render(){
        const {beers, from, to} = this.state
        return(
    <BrowserRouter>
        <Layout>
            <Header>
            <Menu theme="dark" mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" > <NavLink to="/"><Icon type="apple" /> </NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/beers" >All beers </NavLink></Menu.Item>
                <Menu.Item key="3"> <NavLink  to="/beers/random"> Random beer </NavLink></Menu.Item>
                <Menu.Item key="4"> <NavLink  to="/new-beer">Add beer </NavLink></Menu.Item>
            </Menu>
            </Header>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/beers' render={props => <Beers beers={beers} from={from} to={to} handleChange={this.handleChange}{...props}  />}/>
                <Route path='/random-beer' component={Single}/>
                <Route path='/new-beer' component={Add}/>
                <Route exact path='/beers/:id' component={Single}/>
            </Switch>
            <Footer style={{textAlign: 'center'}}>
                    Don chingon beer
                </Footer>
        </Layout>
    </BrowserRouter>
        )
}
}

export default Router