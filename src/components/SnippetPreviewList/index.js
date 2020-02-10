import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeGetRequest } from '../../helpers'
import { loadSnippets } from '../../action-creators'
import SnippetPreview from '../SnippetPreview'
import './SnippetPreviewList.sass'

const SnippetList = props => {
    const dispatch = useDispatch()
    const snippets = useSelector(state => state.snippets)
    const snippetFilters = useSelector(state => state.filter)

    useEffect(() => {
        makeGetRequest(props.location.state?.createdSnippet || snippetFilters)
            .then(snippets => {
                dispatch(loadSnippets(snippets))
            })
            .catch(err => console.log(err))
    }, [])

    const snippetList = snippets.map(snippet => (
        <article className='article' key={snippet._id}>
            <SnippetPreview snippet={snippet} />
        </article>
    ))

    return <section className='section'>{snippetList}</section>
}

export default SnippetList
