import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import './Input.sass'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 20,
        maxWidth: props => props?.style?.maxWidth || 200,
        borderRadius: '4px',
        '& > div': {
            border: '1px solid transparent',
            transition: '0.5s',
            '&:hover': {
                border: '1px solid #1890ff'
            }
        },
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
                padding: '9px 10px 10px'
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
        }
    }
}))

const InputText = props => {
    const { label, handleChange, name, value, variant } = props
    const styles = useStyles(props)

    return (
        <TextField
            type='text'
            variant={variant || 'filled'}
            className={styles.root}
            name={name}
            label={label}
            onChange={handleChange}
            value={value}
        />
    )
}

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    variant: PropTypes.string
}

export default InputText
