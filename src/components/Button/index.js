import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    btn: {
        maxWidth: props => props?.style?.maxWidth || 100,
        marginTop: props => props?.style?.marginTop || 20,
        alignSelf: props => props?.style?.alignSelf,
        padding: props => props?.style?.padding,
        position: props => props?.style?.position || 'static',
        top: props => props?.style?.top,
        left: props => props?.style?.left,
        color: props => props?.style?.color || '#fff',
        backgroundColor: props => props?.style?.bgColor || 'blue',
        borderRadius: props => props?.style?.brad || 4,
        '&:hover': {
            color: props => props?.style?.hover?.color,
            backgroundColor: props => props?.style?.hover?.bgColor
        },
        transition: props => props?.style?.transition || '.5s',
        fontFamily: props => props?.style?.fontFamily,
        fontSize: props => props?.style?.fontSize,
        textTransform: 'none',
        '&.Mui-disabled': {
            backgroundColor: 'rgba(256, 256, 256, .3)',
            color: 'rgba(0, 0, 0, .3)'
        }
    }
}))

const MyButton = props => {
    const classes = useStyles(props)
    const { text, id, variant, size, type, isDisabled, handleClick } = props

    return (
        <Button
            type={type}
            id={id}
            variant={variant}
            className={classes.btn}
            size={size}
            disableElevation
            disabled={isDisabled}
            onClick={handleClick}
        >
            {text}
        </Button>
    )
}

MyButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    id: PropTypes.string
}

export default MyButton
