import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: '7%',
        left: '85%',
        transition: '0.4s'
    }
}))

const FabButton = ({ width, icon }) => {
    const classes = useStyles()

    const isXs = width === 'xs'
    const isSm = width === 'sm'

    const props = {
        size: isXs ? 'small' : isSm ? 'medium' : 'large'
    }

    return (
        <Fab color='primary' className={classes.fab} {...props}>
            {icon}
        </Fab>
    )
}

FabButton.propTypes = {
    icon: PropTypes.element.isRequired
}

export default withWidth()(FabButton)
