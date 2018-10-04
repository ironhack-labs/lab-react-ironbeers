import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import beers from '../beers.json'
import 'antd/dist/antd.css'
import { List } from 'antd';


class BeerList extends Component {
  state ={
    beers : {beers}
  }
  render() {
    return (
      <div>
      <h3 style={{ marginBottom: 16 }}>Beer</h3>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={beers.map((b,i)=><NavLink to={`/detail/${b._id}`} key={i}>{b.name}</NavLink>)}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
    </div>
    )
  }
}

export default BeerList


