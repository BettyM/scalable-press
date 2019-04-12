import React, { Component } from 'react'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from
'@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from
'@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Timer from '../Timer'
import CoinFlip from '../CoinFlip'
import Calendar from '../Calendar'

export default class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      expanded: 'panel1',
      finalDate: moment().add(1, 'day'),
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  onDateChange = e => {
    this.setState({ finalDate: e })
  }

  render() {
    const { expanded, finalDate } = this.state

    return (
      <div className="root">
        <Typography className="title-text">
          Scalable Press Quizzes
        </Typography>
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary className="summary">
            <Typography className="subtitle-text">
              Countdown Timer
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid item xs={12}>
              <Calendar
                onDateChange={this.onDateChange}
                selectedDate={finalDate}
              />
              <Timer date={finalDate} />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary className="summary">
            <Typography className="subtitle-text">
              Coin Flip
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid item xs={12}>
              <CoinFlip />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}
