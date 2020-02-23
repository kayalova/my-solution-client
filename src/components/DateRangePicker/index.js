import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'

import { getFilters } from '../../selectors/filters'
import { updateFilters } from '../../action-creators'
import './DateRangePicker.sass'

const DateRangePicker = ({ classes }) => {
    const dateValues = useSelector(getFilters)
    const dispatch = useDispatch()

    const { startDate, endDate } = dateValues

    let start = useMemo(
        () => ({
            value: startDate,
            name: 'startDate',
            label: 'Start date',
            id: 'date-picker-start'
        }),
        [startDate]
    )

    let end = useMemo(
        () => ({
            value: endDate,
            name: 'endDate',
            label: 'End date',
            id: 'date-picker-end',
            minDate: startDate,
            minDateMessage: 'End date can not be before start date'
        }),
        [endDate, startDate]
    )

    const handleStartChange = useCallback(
        date => {
            const target = { startDate: date.getTime() }
            end.minDate = date.getTime()
            dispatch(updateFilters(target))
        },
        [startDate, end.minDate, dispatch]
    )

    const handleEndChange = useCallback(
        date => {
            const target = { endDate: date.getTime() }
            dispatch(updateFilters(target))
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

DateRangePicker.propTyped = {
    classes: PropTypes.object
}

export default DateRangePicker
