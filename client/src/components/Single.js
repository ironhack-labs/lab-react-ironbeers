import React, {Component} from 'react';
import axios from 'axios'



class Single extends Component {
  constructor(props){
    super(props);
    this.state = {id: this.props.match.params.id,
    single:""}
    // console.log('https://ironbeer-api.herokuapp.com/beers/single/'+this.state.id)
}

componentWillMount(){
  axios.get('https://ironbeer-api.herokuapp.com/beers/single/'+this.props.match.params.id)
  .then(response => {
    // console.log(response.data)
    this.setState({single: response.data})
    // console.log(this.state.single)
  })
}

  render(){
    const single = this.state.single
    console.log(single)
    return(
      <div>
        <p>hello</p>
        <img src={single.image_url}></img>
      </div>
    ) 
  }
}

export default Single;