import React, {Component} from 'react'
import {Layout, Descriptions} from 'antd'
import axios from 'axios'
const {Content} = Layout
class SingleBeer extends Component {
    state = {
        beer: {}
    }

    componentDidMount = async()=>{
        const {id} = this.props.match.params
        const {data: beer} = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
        this.setState(()=>{
            return {beer}
        })
    }

    componentWillUpdate = async prevProps => {
        const { id } = prevProps.match.params;
        if (id !== this.props.match.params.id) {
          const { data: beer } = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`);
          this.setState(() => {
            return { beer };
          });
        }
      };
      
    render(){
        const {beer} = this.state
    return (
        
    <Content>
        <div ><img style ={{width: '100px'}} src={beer.image_url} alt={beer.name}/></div>
  <Descriptions title={beer.name}>
    <Descriptions.Item label="Tagline">{beer.tagline}</Descriptions.Item>
    <Descriptions.Item label="First Brewed">{beer.first_brewed}</Descriptions.Item>
    <Descriptions.Item label="Attenuation Level">{beer.attenuation_level}</Descriptions.Item>
    <Descriptions.Item label="Description">{beer.description}</Descriptions.Item>
    <br/>
    <Descriptions.Item label="Contributed By"><b>{beer.contributed_by}</b></Descriptions.Item>
  </Descriptions>
    </Content>
    )
}
}

export default  SingleBeer