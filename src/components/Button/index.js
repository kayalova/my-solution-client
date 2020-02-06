import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    btn: {
        maxWidth: props => props?.style?.maxWidth || 100,
        color: props => props?.style?.color || '#fff',
        backgroundColor: props => props?.style?.bgColor || 'blue',
        alignSelf: props => props?.style?.alignSelf,
        padding: props => props?.style?.padding,
        '&:hover': {
            color: props => props?.style?.hover?.color,
            backgroundColor: props => props?.style?.hover?.bgColor
        },
        transition: props => props?.style?.transition,
        marginTop: 20,
        textTransform: 'none',
        '&.Mui-disabled': {
            backgroundColor: 'rgba(256, 256, 256, .3)',
            color: 'rgba(0, 0, 0, .3)'
        }
    }
}))

const MyButton = props => {
    const classes = useStyles(props)

    const { text, variant, isDisabled, size } = props
    return (
        <Button
            fullWidth={false}
            variant={variant}
            className={classes.btn}
            size={size}
            disableElevation
            disabled={isDisabled}
        >
            {text}
        </Button>
    )
}

export default MyButton
