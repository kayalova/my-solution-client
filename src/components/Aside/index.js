import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles"

import InputSelect from '../Select'
import DateRangePicker from '../DateRangePicker'
import { CATEGORIES, CHANGE_INPUTS } from '../../constants'
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

    const formFilterValues = useSelector(state => state.filter)
    const { filename, category, description } = formFilterValues

    const dispatch = useDispatch()

    const handleInputsChange = useCallback(e => {
        const target = { [e.target.name]: e.target.value }
        dispatch({ type: CHANGE_INPUTS, payload: target })
    }, [filename, category, description, dispatch])


    const handleSubmit = useCallback(e => {
        e.preventDefault()


        // const selectors = { ...inputsValues, selectedStartDate, selectedEndDate }
        // console.log(selectors)
        fetch('http://localhost:3030/api/snippets', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify([1, 2, 3])
        }).then(response => {
            console.log(response.json())
        }).catch(err => console.log(err))
    }, [])

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