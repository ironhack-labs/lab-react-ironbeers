import React, { Component } from 'react';
import "./styles.css";

class Input extends Component {
    render(){
        const { title, style, type, name, value, action} = this.props;
        return (
            <div className="box-input">
                <div className="txtForm"> {title} </div>
                <input className={style} type={type} name={name} value={value} onChange={action}/>
            </div>
        )
    }
}

export default Input;