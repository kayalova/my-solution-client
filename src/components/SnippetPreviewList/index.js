import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSnippets } from '../../server/serverApi'
import { loadSnippets } from '../../action-creators'
import SnippetPreview from '../SnippetPreview'
import './SnippetPreviewList.sass'

const SnippetList = props => {
    const dispatch = useDispatch()
    const snippets = useSelector(state => state.snippets)
    const snippetFilters = useSelector(state => state.filter)

    useEffect(() => {
        getSnippets(props.location.state?.createdSnippet || snippetFilters)
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

    const noSnippets = (
        <p className='no-snippets-text'>Sorry, no snippets found</p>
    )

    return (
        <section className='section'>
            {snippetList.length ? snippetList : noSnippets}
        </section>
    )
}

export default SnippetList
