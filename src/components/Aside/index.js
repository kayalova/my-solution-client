import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import InputSelect from '../Select'
import DateRangePicker from './DateRangePicker'
import { CATEGORIES, CHANGE_FILTERS } from '../../constants'
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

const Aside = () => {
    const dispatch = useDispatch()
    const formFilterValues = useSelector(state => state.filter, shallowEqual)
    const { filename, category, description } = formFilterValues

    const handleInputsChange = useCallback(
        e => {
            const target = { [e.target.name]: e.target.value }
            dispatch({ type: CHANGE_FILTERS, payload: target })
        },
        [filename, category, description, dispatch]
    )

    const handleSubmit = useCallback(
        e => {
            e.preventDefault()
            const url = new URL('http://localhost:3002/api/snippets')
            const params = formFilterValues

            Object.keys(params).forEach(p => {
                url.searchParams.append(p, params[p])
            })

            fetch(url)
                .then(response => response.json())
                .then(resp => console.log(resp))
                .then(snippets => console.log(snippets))
                .catch(err => console.log(err))
        },
        [formFilterValues]
    )

    const classes = useStyles()

    return (
        <aside className='aside'>
            <h3 className='aside__title'>Filter by</h3>
            <form action='' className='form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='filename'
                    className='form__field'
                    placeholder='[filename].[ext]'
                    value={filename}
                    onChange={handleInputsChange}
                />
                <textarea
                    className='form__field textarea'
                    name='description'
                    id=''
                    cols='30'
                    rows='10'
                    placeholder='Description...'
                    onChange={handleInputsChange}
                />

                <InputSelect
                    name='category'
                    inputLabel={'Category'}
                    categories={CATEGORIES}
                    handleChange={handleInputsChange}
                    value={category}
                    labelId={'filter-label'}
                    selectId={'filter-select'}
                />

                <DateRangePicker classes={classes} />

                <button className='btn btn-filter'>Filter</button>
            </form>
        </aside>
    )
}

export default Aside
