import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import SnippetTable from './SnippetTable'
import Button from '../Button'
import { getFullDate } from '../../helpers'
import { getSnippet, deleteSnippet } from '../../server/serverApi'
import { BTN_DELETE_STYLES } from '../../constants/styles'
import { removeSnippet } from '../../action-creators'
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
            .then(() => dispatch(removeSnippet(_id)))
            .catch(err => console.log(err))
    }

    const clickHandler = async e => {
        e.preventDefault()
        const response = await getSnippet(_id)
        history.push(`/snippets/${_id}`, response)
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

export default SnippetPreview
