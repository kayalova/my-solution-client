import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'

import { CHANGE_FILTERS } from '../../../constants'
import './DateRangePicker.sass'

const DateRangePicker = ({ classes }) => {
    const dateValues = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const { startDate, endDate } = dateValues

    let start = {
        value: startDate,
        name: 'startDate',
        label: 'Start date',
        id: 'date-picker-start'
    }

    let end = {
        value: endDate,
        name: 'endDate',
        label: 'End date',
        id: 'date-picker-end',
        minDate: startDate,
        minDateMessage: 'End date can not be before start date'
    }

    const handleStartChange = useCallback(
        date => {
            const target = { startDate: date.getTime() }
            end.minDate = date.getTime()
            dispatch({ type: CHANGE_FILTERS, payload: target })
        },
        [startDate, end.minDate, dispatch]
    )

    const handleEndChange = useCallback(
        date => {
            const target = { endDate: date.getTime() }
            dispatch({ type: CHANGE_FILTERS, payload: target })
        },
        [endDate, dispatch]
    )

    start = { ...start, handleStartChange }
    end = { ...end, handleEndChange }

    const datePickers = [start, end].map(date => (
        <MuiPickersUtilsProvider utils={DateFnsUtils} key={date.id}>
            <KeyboardDatePicker
                variant='inline'
                format='dd/MM/yyyy'
                autoOk
                animateYearScrolling
                className={classes.formControl}
                label={date.label}
                id={date.id}
                value={date.value}
                onChange={date.handleStartChange || date.handleEndChange}
                minDate={date.minDate}
                minDateMessage={date.minDateMessage}
            />
        </MuiPickersUtilsProvider>
    ))

    return <React.Fragment>{datePickers}</React.Fragment>
}

export default DateRangePicker
