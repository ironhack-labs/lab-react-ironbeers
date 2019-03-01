import React from 'react'
import axios from 'axios';
let url = 'http://localhost:3000/logout'


class Logout extends React.Component{

    componentWillMount =() =>{
        console.log('aqui ando')
        axios.get(url , {withCredentials:true})
                    .then(res => {
                        this.props.history.push('/')
                        console.log(res)})
                    .catch(e => console.log(e))

    }
    
    

    render(){
        return <div></div>
    }
    
}

export default Logout