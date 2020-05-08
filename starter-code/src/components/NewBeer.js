import React, { Component } from 'react'
import { notification } from 'antd'
import BEERS_SERVICE from '../services/api'
import NewBeerForm from './NewBeerForm'

class NewBeer extends Component {
  onFinish = async (values) => {
    try {
      await BEERS_SERVICE.newBeer(values)
      this.openNotification('success', 'Your beer has been added', 'Thanks for sharing.')
      this.props.history.push('/beers')
    } catch (e) {
      this.openNotification('error', 'There was an error', 'Try again, Check your data.')
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

  render() {
    return (
      <div>
        <NewBeerForm onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} />
      </div>
    )
  }
}

export default NewBeer
