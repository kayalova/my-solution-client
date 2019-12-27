import React, { useCallback, useReducer } from 'react'
import { makeStyles } from "@material-ui/core/styles"

import fitlerReducer from '../../reducers/filters.js'
import InputSelect from '../Select'
import DateRangePicker from '../DateRangePicker'
import { CATEGORIES } from '../../constants'
import './Aside.sass'


const useStyles = makeStyles(theme => ({
    formControl: {
        backgroundColor: '#fbfbfb',
        borderRadius: 8,
        border: '1px solid #fff',
        transition: '.4s',
        marginBottom: '20px',
        maxWidth: '195px'
    },
    item: {
        color: '#1890ff'
    }
}));


const Aside = () => {

    const [formValues, dispatch] = useReducer(fitlerReducer,
        {
            filename: '',
            category: '',
            description: ''
        })


    const { filename, category, description } = formValues

    const handleInputsChange = useCallback(e => {
        const target = { [e.target.name]: e.target.value }
        dispatch({ type: 'CHANGE_INPUTS', payload: target })
    }, [filename, category, description])


    const handleSubmit = useCallback(e => {
        e.preventDefault()

        // const selectors = { ...inputsValues, selectedStartDate, selectedEndDate }
        // console.log(selectors)
        // fetch('/snippets', {
        //     method: 'POST',
        //     body: JSON.stringify(selectors)
        // }).then(response => {
        //     console.log(response)
        // }).catch(err => console.log(err))
    })

    const classes = useStyles()


    return (
        <aside className="aside" >
            <h3 className="aside__title">Filter by</h3>
            <form action="" className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="filename"
                    className="form__field"
                    placeholder="[filename].[ext]"
                    value={filename}
                    onChange={handleInputsChange}
                />
                <textarea
                    className="form__field textarea"
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Description..."
                    value={description}
                    onChange={handleInputsChange}
                />

                <InputSelect
                    name="category"
                    classes={classes}
                    inputLabel={"Category"}
                    categories={CATEGORIES}
                    handleChange={handleInputsChange}
                    value={category}
                    labelId={"filter-label"}
                    selectId={"filter-select"}
                />

                <DateRangePicker
                    classes={classes}
                />

                <button className="btn btn-filter">Filter</button>
            </form>
        </aside >
    )
}

export default Aside