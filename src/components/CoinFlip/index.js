import _ from 'lodash'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

export default class CoinFlip extends Component {
  constructor() {
    super()

    this.state = {
      error: false,
      number: '',
      randomNumber: '',
      errorMsg: 'Number must be greater than 0 and less than 1,000,000',
    }
  }
 
  flip = () => {
    return Math.random() >= 0.5
  }

  setNumber = e => {
    const number = e.target.value
    if(number <= 0 || number > 1000000) {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
    }
    this.setState({
      number: number,
      randomNumber: '',
    })
  }

  randomNumber = () => {
    const { number, error } = this.state

    if(!error) {
      let numbers = Array.from({length: number}, (v, k) => k)
      numbers = _.shuffle(numbers)

      const randomNumber = _.find(numbers, number => {
        if(this.flip()) return number
      })

      this.setState({ randomNumber: randomNumber })
      return randomNumber
    }
  }

  render() {
    const {
      error,
      errorMsg,
      number,
      randomNumber,
    } = this.state

    return (
      <div>
        <TextField
          id="number"
          label="Number"
          value={number}
          onChange={e => this.setNumber(e)}
          type="number"
          className="input"
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          margin="normal"
        />
        <Button
          variant="contained"
          className="submit"
          color="primary"
          onClick={this.randomNumber}
        >
          Get random number
        </Button>
        <FormHelperText className="error-text">
          {error ? errorMsg : ''}
        </FormHelperText>
        {randomNumber ?
          `Random number is ${randomNumber}` : ''}
      </div>
    )
  }
}
