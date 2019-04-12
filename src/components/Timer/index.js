import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'

export default class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const time = this.getCountdown(this.props.date)
      time ? this.setState(time) : clearInterval(this.interval)
    }, 1000)
  }

  getCountdown = finalDate => {
    const now = moment()
    const time = finalDate.diff(now)

    const timeLeft = {
      seconds: Math.floor( (time/1000) % 60 ),
      minutes: Math.floor( (time/1000/60) % 60 ),
      hours: Math.floor( (time/(1000*60*60)) % 24 ),
      days: Math.floor( time/(1000*60*60*24) ),
    }

    return timeLeft
  }

  render() {
    let data = Object.entries(this.state)

    return (
      <Grid container alignItems="center" justify="center" direction="row">
        <div className="countdown">
          {data.map(value =>
            <div className="box" key={value[0]}>
              <div className="number">
                {value[1]}
              </div>
              <div className="label">
                {value[0]}
              </div>
            </div>
          )}
        </div>
      </Grid>
    )
  }
}

Timer.propTypes = {
  date: PropTypes.object,
}
