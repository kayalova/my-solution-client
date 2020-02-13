import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const InputSelect = props => {
    const {
        handleChange,
        value,
        name,
        inputLabel,
        items,
        labelId,
        selectId
    } = props

    const useStyles = makeStyles(theme => ({
        formControl: {
            backgroundColor: '#fbfbfb',
            borderRadius: 4,
            border: '1px solid #fff',
            transition: '.4s',
            marginBottom: 20,
            maxWidth: 200
        },
        item: {
            color: '#1890ff'
        }
    }))

    const classes = useStyles()
    const options = items.map(({ title, _id }) => (
        <MenuItem className={classes.item} value={_id} key={_id}>
            {title}
        </MenuItem>
    ))

    return (
        <FormControl className={classes.formControl} variant='outlined'>
            <InputLabel id={labelId}>{inputLabel}</InputLabel>
            <Select
                name={name}
                labelId={labelId}
                id={selectId}
                value={value}
                onChange={handleChange}
            >
                {options}
            </Select>
        </FormControl>
    )
}

InputSelect.propTypes = {
    items: PropTypes.array.isRequired,
    inputLabel: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
    selectId: PropTypes.string,
    labelId: PropTypes.string
}

export default InputSelect
