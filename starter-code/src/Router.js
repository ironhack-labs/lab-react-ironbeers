import React, {Component} from 'react'
import {BrowserRouter, Switch, NavLink, Route} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd'
import Home from './components/Home'
import axios from 'axios'
import Beers from './components/Beers'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'
const {Header, Footer} = Layout

class Router extends Component{

    state = {
        beers: [],
        from: 0,
        to: 9
    }

    componentDidMount= async()=>{
        const {data: beers} = await axios.get('https://ih-beer-api.herokuapp.com/beers')
        this.setState(()=>{
            return{
                beers: this.props.beers ? this.props.beers : beers 
            }
        })
    }

    handleChange = (value) => {
        this.setState( () => {
            const from = value*9
            const to = (value*9) +10
            return{from, to}
        })
    }


    render(){
        const {beers, from, to} =this.state
        return(

            <BrowserRouter>
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}>
                        <Menu.Item key="0"><Icon type="gitlab"></Icon><NavLink exact to="/"></NavLink></Menu.Item>
                        <Menu.Item key="1"><NavLink exact to="/beers">All Beers</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink exact to="/beers/random"></NavLink>Random Beer</Menu.Item>
                        <Menu.Item key="3"><NavLink exact to="/new-beer"></NavLink>Add Beer</Menu.Item>
                    </Menu>
                </Header>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/beers" render ={props => <Beers beers={beers} from={from} to={to} handleChange={this.handleChange} {...props}/>}/>
                    <Route path="/new-beer" component={NewBeer}/>
                    <Route exact path="/beers/:id" component={SingleBeer}/>
                </Switch>
                <Footer style={{textAlign:"center"}}>
                IronBeers ©2018 Created by Myself
                </Footer>
            </Layout>
            </BrowserRouter>
    
        
        )
    }
}

export default Router