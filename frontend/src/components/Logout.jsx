import React from 'react'


class Logout extends React.Component{

    componentWillMount =() =>{
        this.props.logOut()
    }
    
    render(){
        return <div></div>
    }
    
}

export default Logout