import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Button from '../Button'
import Input from '../Input'
import InputSelect from '../Select'
import DateRangePicker from '../DateRangePicker'
import { BTN_FILTER_STYLES } from '../../constants/styles'
import './Aside.sass'

const useStyles = makeStyles(theme => ({
    formControl: {
        backgroundColor: '#fbfbfb',
        borderRadius: 4,
        border: '1px solid #fff',
        transition: '.4s',
        marginBottom: '20px',
        maxWidth: '195px'
    },
    item: {
        color: '#1890ff'
    }
}))

const Aside = ({ categories, handleSubmit, handleInputsChange, values }) => {
    const classes = useStyles()

    return (
        <aside className='aside'>
            <h3 className='aside__title'>Filter by</h3>
            <form className='form' onSubmit={handleSubmit}>
                <Input
                    name='filename'
                    label='[filename].[ext]'
                    handleChange={handleInputsChange}
                    value={values.filename}
                />

                <Input
                    name='description'
                    label='Description...'
                    handleChange={handleInputsChange}
                    value={values.description}
                />

                <InputSelect
                    name='category'
                    inputLabel={'Category'}
                    items={categories}
                    handleChange={handleInputsChange}
                    value={values.category}
                    labelId={'filter-label'}
                    selectId={'filter-select'}
                />

                <DateRangePicker classes={classes} />

                <Button
                    variant='contained'
                    text={'Filter'}
                    type='submit'
                    size='medium'
                    style={BTN_FILTER_STYLES}
                />
            </form>
        </aside>
    )
}

Aside.propTypes = {
    categories: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputsChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}

export default Aside
