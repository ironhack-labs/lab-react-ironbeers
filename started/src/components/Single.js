import React, {Component} from 'react';
import DetailedBeer from './DetailedBeer';


export default class Single extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          beer: {
            image_url:'',
            name:'',
            tagline:'',
            first_brewed:'',
            attenuation_level:'',
            description:'',
            contributed_by:''
          }
        };
    }

    componentDidMount() {
        const {params} = this.props.match;
        // console.log(this.props.match)
        fetch(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
          .then(res => res.json())
          .then(
            (data) => {
                // console.log(data)
              this.setState({
                isLoaded: true,
                beer: data
              });
            
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
        )
    } 
    render () {
        const {error, isLoaded, beer  } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
        return(
            <div>
              <DetailedBeer {...this.state.beer}></DetailedBeer>
            </div>
      
          )
        }
    }    
}
