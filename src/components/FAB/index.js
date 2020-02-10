import React from 'react'
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
        <Fab
            color='primary'
            aria-label='add'
            className={classes.fab}
            {...props}
        >
            {icon}
        </Fab>
    )
}

export default withWidth()(FabButton)
