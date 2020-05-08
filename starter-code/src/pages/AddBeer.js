import React, { Component } from 'react';
import BEERS_SERVICE from '../services/beerAPIService'
import CreateForm from '../components/Form'
import { notification } from 'antd'

class CreateBeer extends Component {
  onFinish = async (values) => {
    try {
      await BEERS_SERVICE.createBeer(values)
      this.openNotification(
        'success',
        'Beer Added',
        'Thanks for contributing'
      )
      this.props.history.push('/beers')
    } catch (e) {
      this.openNotification(
        'error',
        'Something went wrong :(',
        'Try again later'
      )
    }
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    })
  }

  render(){
    return (
      <div>
      <CreateForm onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}/>
      </div>
    );
  }
};

export default CreateBeer