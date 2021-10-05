import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {

    state = {
        loading: true,
        data:[]
    }

componentDidMount(){
    
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((result)=> {
        console.log("beer", result)
        this.setState({
            data: result.data,
            loading:false
        })
    })
}

    render() {
        if(this.state.loading){
            return <div><p>Loading......</p></div>
            //<div><img src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/fidget-spinner-loading.gif?fit=880%2C440&ssl=1"></img> </div>
        }

        console.log("data",this.state.data)
        return (
            <div>
                {this.state.data.map((beer)=>{
                    return(
                        <div>
                           <Link to={`/beers/${beer._id}`}> {beer.name} </Link>
                        </div>
                    )
                })}
            </div>
           

        )
    }



}

export default AllBeers