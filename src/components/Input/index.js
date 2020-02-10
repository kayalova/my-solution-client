import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import './Input.sass'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 20,
        maxWidth: props => props.style?.maxWidth || 200,
        borderRadius: '4px',
        '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
            transform: 'translate(12px, 9px) scale(0.66)'
        },
        '& .MuiInputLabel-formControl': {
            top: '-8px',
            fontSize: '13px'
        },
        '&.MuiTextField-root': {
            padding: 0,
            '& .MuiFilledInput-input': {
                padding: '12px 10px 8px'
            },
            '& .MuiFilledInput-underline:before': {
                borderBottom: 0
            },
            '& .MuiFilledInput-underline.Mui-focused:after': {
                borderBottom: 0
            }
        },
        '& .MuiFilledInput-root': {
            '&:hover:not(.Mui-disabled):before': {
                borderBottom: 0
            },
            backgroundColor: '#fbfbfb',
            borderRadius: '4px',
            '& > input': {
                color: '#43679D'
            }
            // '&:focus': {
            //     backgroundColor: 'red'
            // }
        }
    }
}))

const InputText = props => {
    const { label, handleChange, name, value, variant } = props
    const styles = useStyles(props)

    return (
        <TextField
            variant={variant || 'filled'}
            className={styles.root}
            name={name}
            label={label}
            onChange={handleChange}
            value={value}
        />
    )
}

export default InputText
