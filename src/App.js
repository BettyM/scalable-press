import React, { Component } from 'react'
import './App.css';
import moment from 'moment'
import Dashboard from './components/Dashboard'

const finalDate = moment().add(2, 'months')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard finalDate={finalDate} />
      </div>
    )
  }
}

export default App
