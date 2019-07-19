import React, {createContext, Component} from 'react'

export const MyContext = createContext()

export default class ContextProvider extends Component {
    state = {

    }

    render(){
        return <MyContext.Provider>
            {this.props.children}
        </MyContext.Provider>
    }
}