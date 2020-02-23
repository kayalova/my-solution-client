import React from 'react'
import './SnippetPreviewList.sass'

const SnippetList = ({ snippetList }) => {
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
