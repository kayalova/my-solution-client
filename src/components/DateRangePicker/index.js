import React from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'

const DateRangePicker = props => {
    const { startDate, endDate, classes } = props

    const datePickers = [startDate, endDate].map(date => (
        <MuiPickersUtilsProvider utils={DateFnsUtils} key={date.id}>
            <KeyboardDatePicker className={classes.formControl}
                autoOk
                variant="inline"
                animateYearScrolling={true}
                format="dd / MM / yyyy"
                id={date.id}
                value={date.value}
                onChange={date.handleChange}
                minDate={date.minDate}
                minDateMessage={date.minDateMessage}
            />
        </MuiPickersUtilsProvider>
    ))

    return (
        <React.Fragment>
            {datePickers}
        </React.Fragment>
    )
}


export default DateRangePicker