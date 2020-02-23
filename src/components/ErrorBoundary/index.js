import React, { useCallback, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setError } from '../../action-creators'
import Button from '../Button'

const ErrorBoundary = ({ children }) => {
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    const handleClick = useCallback(() => {
        dispatch(setError('', false))
    }, [])

    if (error.hasError) {
        return (
            <React.Fragment>
                <p>Something went wrong:</p>
                <p>{error.errMessage}</p>
                <Link to='/snippets' className='link'>
                    <Button
                        type='button'
                        text='Retry'
                        variant='text'
                        handleClick={handleClick}
                    />
                </Link>
            </React.Fragment>
        )
    }
    return <React.Fragment>{children}</React.Fragment>
}

export default ErrorBoundary
