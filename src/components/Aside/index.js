import React, { useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Button from '../Button'
import Input from '../Input'
import InputSelect from '../Select'
import DateRangePicker from '../DateRangePicker'
import { BTN_FILTER_STYLES } from '../../constants/styles'
import { updateFilters, loadSnippets } from '../../action-creators'
import { getSnippets } from '../../server/Repository'
import { makeGetRequest, makeCatsGetRequest } from '../../helpers'
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
    const [categories, setCategories] = useState([])
    const formFilterValues = useSelector(state => state.filter)
    const { filename, category, description } = formFilterValues

    useEffect(() => {
        makeCatsGetRequest()
            .then(cats => setCategories(cats))
            .catch(err => console.log(err))
    }, [])

    const handleInputsChange = useCallback(
        e => {
            const target = { [e.target.name]: e.target.value }
            dispatch(updateFilters(target))
        },
        [filename, category, description, dispatch]
    )

    const handleSubmit = useCallback(
        e => {
            e.preventDefault()
            getSnippets({ category, description, userFilename: filename })
                .then(snippets => dispatch(loadSnippets(snippets)))
                .catch(err => console.log(err))
        },
        [formFilterValues]
    )

    const classes = useStyles()

    return (
        <aside className='aside'>
            <h3 className='aside__title'>Filter by</h3>
            <form className='form' onSubmit={handleSubmit}>
                <Input
                    type='text'
                    name='filename'
                    label='[filename].[ext]'
                    handleChange={handleInputsChange}
                    value={filename}
                />

                <Input
                    name='description'
                    label='Description...'
                    handleChange={handleInputsChange}
                    value={description}
                />

                <InputSelect
                    name='category'
                    inputLabel={'Category'}
                    items={categories}
                    handleChange={handleInputsChange}
                    value={category}
                    labelId={'filter-label'}
                    selectId={'filter-select'}
                />

                <DateRangePicker classes={classes} />

                <Button
                    type='submit'
                    text={'Filter'}
                    style={BTN_FILTER_STYLES}
                    size='medium'
                />
                {/* <button className='btn btn-filter'>Filter</button> */}
            </form>
        </aside>
    )
}

export default Aside
