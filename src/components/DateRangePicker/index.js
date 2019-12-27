import React, { useReducer, useCallback } from 'react'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'

import fitlerReducer from '../../reducers/filters.js'



const DateRangePicker = ({ classes }) => {

    const [dateValues, dispatch] = useReducer(fitlerReducer,
        {
            startDate: '2019.08.18',
            endDate: '2019.08.18',
        })

    const { startDate, endDate } = dateValues

    let start = {
        value: startDate,
        name: 'startDate',
        id: "date-picker-start",
    }

    let end = {
        value: endDate,
        name: 'endDate',
        id: "date-picker-end",
        minDate: startDate,
        minDateMessage: "End date can not be before start date",
    }


    const handleStartChange = useCallback((date, value) => {
        const target = { [startDate]: value }
        end.minDate = value
        dispatch({ type: 'CHANGE_INPUTS', payload: target })
    }, [startDate, end.minDate])


    const handleEndChange = useCallback((date, value) => {
        const target = { [endDate]: value }
        dispatch({ type: 'CHANGE_INPUTS', payload: target })
    }, [endDate])


    start = { ...start, handleStartChange: handleStartChange }
    end = { ...end, handleEndChange: handleEndChange }


    const datePickers = [start, end].map(date => (
        <MuiPickersUtilsProvider utils={DateFnsUtils} key={date.id}>
            <KeyboardDatePicker className={classes.formControl}
                autoOk
                variant="inline"
                animateYearScrolling={true}
                format="dd.MM.yyyy"
                id={date.id}
                value={date.value}
                onChange={date.handleStartChange || date.handleEndChange}
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