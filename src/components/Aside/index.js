import React from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


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

    const [category, setCategory] = React.useState("");
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
    };

    const handleEndDateChange = date => {
        setSelectedEndDate(date);
    };

    const handleCategoryChange = event => {
        setCategory(event.target.value);
    };

    const classes = useStyles();

    return (
        <aside className="aside" >
            <h3 className="aside__header">Filter by</h3>
            <form action="" className="form">
                <input type="text" className="form__field" placeholder="[filename].[ext]" />
                <textarea
                    className="form__field textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Description..."
                />

                <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <MenuItem className={classes.item} value={"frontend"}>Frontend</MenuItem>
                        <MenuItem className={classes.item} value={"machine-learning"}>Machine Learning</MenuItem>
                        <MenuItem className={classes.item} value={"dependency-inversion"}>Dependency Inversion</MenuItem>
                        <MenuItem className={classes.item} value={"backend"}>Backend</MenuItem>
                        <MenuItem className={classes.item} value={"computer-graphics"}>Computer Graphics</MenuItem>
                    </Select>
                </FormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker className={classes.formControl}
                        autoOk
                        variant="inline"
                        animateYearScrolling={true}
                        format="dd / MM / yyyy"
                        id="date-picker-start"
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                    />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker className={classes.formControl}
                        autoOk
                        variant="inline"
                        minDate={selectedStartDate}
                        animateYearScrolling={true}
                        format="dd / MM / yyyy"
                        id="date-picker-end"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        minDateMessage={"End date can not be before start date"}
                    />
                </MuiPickersUtilsProvider>

                <button className="btn-accent">Filter</button>
            </form>
        </aside >
    )
}

export default Aside