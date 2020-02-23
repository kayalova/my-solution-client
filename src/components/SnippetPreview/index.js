import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import SnippetTable from '../Table'
import Button from '../Button'
import { getFullDate } from '../../helpers'
import { BTN_DELETE_STYLES } from '../../constants/styles'
import { fetchDeleteSnippet, loadOneSnippet } from '../../action-creators'
import './SnippetPreview.sass'

const SnippetPreview = ({ snippet }) => {
    const {
        _id,
        userFilename: filename,
        description,
        category,
        createdAt,
        codePreview
    } = snippet

    const history = useHistory()
    const dispatch = useDispatch()

    const date = useMemo(() => getFullDate(createdAt), [createdAt])

    const submitHandler = useCallback(e => {
        e.preventDefault()
        dispatch(fetchDeleteSnippet(_id))
    }, [])

    const clickHandler = useCallback(e => {
        e.preventDefault()
        dispatch(loadOneSnippet(_id, history))
    }, [])

    return (
        <section className='snippet'>
            <form onClick={clickHandler}>
                <div className='snippet__code'>
                    <SnippetTable text={codePreview} />
                </div>
            </form>
            <div className='snippet__info'>
                <div className='info-wrapper'>
                    <p className='snippet__text'>{filename}</p>
                    <p className='snippet__text'>{description}</p>
                    <p className='snippet__text'>{category.title}</p>
                    <p className='snippet__text'>{date}</p>
                </div>
                <form onSubmit={submitHandler} style={{ display: 'flex' }}>
                    <Button
                        type='submit'
                        style={BTN_DELETE_STYLES}
                        id={_id}
                        text='Delete'
                        variant='contained'
                        size='medium'
                    />
                </form>
            </div>
        </section>
    )
}

SnippetPreview.propTypes = {
    snippet: PropTypes.shape({
        _id: PropTypes.string,
        filename: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.object,
        createdAt: PropTypes.number,
        codePreview: PropTypes.string
    })
}

export default SnippetPreview
