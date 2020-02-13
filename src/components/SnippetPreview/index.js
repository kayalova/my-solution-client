import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import SnippetTable from './SnippetTable'
import Button from '../Button'
import { getFullDate } from '../../helpers'
import { getSnippet, deleteSnippet } from '../../server/serverApi'
import { BTN_DELETE_STYLES } from '../../constants/styles'
import { removeSnippet, setError } from '../../action-creators'
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

    const date = getFullDate(createdAt)

    const submitHandler = e => {
        e.preventDefault()
        deleteSnippet(_id)
            .then(response => {
                if (response.message !== 'Snippet successfully deleted')
                    dispatch(setError(response.message))
                else dispatch(removeSnippet(_id))
            })
            .catch(err => dispatch(setError(err)))
    }

    const clickHandler = e => {
        e.preventDefault()
        getSnippet(_id)
            .then(response => {
                if (!response.message)
                    history.push(`/snippets/${_id}`, response)
                else dispatch(setError(response.message))
            })
            .catch(err => dispatch(setError(err)))
    }

    return (
        <section className='snippet'>
            <form onClick={clickHandler}>
                <div className='snippet__code'>
                    <SnippetTable codePreview={codePreview} />
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
                        style={BTN_DELETE_STYLES}
                        type='submit'
                        id='btn-delete'
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
