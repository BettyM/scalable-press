import React, { Component } from 'react'
import Timer from '../Timer'
import CoinFlip from '../CoinFlip'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Timer date={this.props.finalDate} />
        <CoinFlip />
      </div>
    )
  }
}
