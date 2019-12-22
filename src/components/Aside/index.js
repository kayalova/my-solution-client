import React, { useState, useCallback } from 'react'
import { makeStyles } from "@material-ui/core/styles"

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

    const [inputsValues, setInputsValues] = useState({ filename: '', description: '', category: '' })
    const [selectedStartDate, setSelectedStartDate] = useState(new Date('2014-08-18T21:11:54'));
    const [selectedEndDate, setSelectedEndDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleStartDateChange = useCallback(date => {
        setSelectedStartDate(date);
        startDate.value = date
        endDate.minDate = date
    }, []);

    const handleEndDateChange = useCallback(date => {
        setSelectedEndDate(date)
        endDate.value = date
    }, []);

    const handleInputsChange = useCallback(e => {
        const target = { [e.target.name]: e.target.value }
        setInputsValues({ ...inputsValues, ...target })
    }, [])

    const classes = useStyles();

    const startDate = {
        value: selectedStartDate,
        handleChange: handleStartDateChange,
        id: "date-picker-start",
        minDate: new Date(2000, 12, 31)
    }

    const endDate = {
        value: selectedEndDate,
        handleChange: handleEndDateChange,
        id: "date-picker-end",
        minDate: selectedStartDate,
        minDateMessage: "End date can not be before start date"
    }


    return (
        <aside className="aside" >
            <h3 className="aside__title">Filter by</h3>
            <form action="" className="form">
                <input
                    type="text"
                    name="filename"
                    className="form__field"
                    placeholder="[filename].[ext]"
                    value={inputsValues.filename}
                    onChange={handleInputsChange}
                />
                <textarea
                    className="form__field textarea"
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Description..."
                    value={inputsValues.description}
                    onChange={handleInputsChange}
                />

                <InputSelect
                    name="category"
                    classes={classes}
                    inputLabel={"Category"}
                    categories={CATEGORIES}
                    handleChange={handleInputsChange}
                    value={inputsValues.category}
                    labelId={"filter-label"}
                    selectId={"filter-select"}
                />

                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                    classes={classes}
                />

                <button className="btn-accent">Filter</button>
            </form>
        </aside >
    )
}

export default Aside