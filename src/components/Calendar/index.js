import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from 'material-ui-pickers'

const Calendar = ({ onDateChange, selectedDate }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        disablePast
        margin="normal"
        label="Select a date"
        value={selectedDate}
        onChange={e => onDateChange(e)}
      />
    </MuiPickersUtilsProvider>
  )
}

Calendar.propTypes = {
  onDateChange: PropTypes.func,
  selectedDate: PropTypes.object,
}

Calendar.defaultProps = {
  selectedDate: moment()
}

export default Calendar
