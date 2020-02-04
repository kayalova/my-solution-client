import React from 'react'

import SnippetTable from './SnippetTable'
import './SnippetPreview.sass'

const SnippetPreview = ({ snippet }) => {
    const { filename, category, date, description } = snippet
    return (
        <React.Fragment>
            <section className='snippet'>
                <div className='snippet__code'>
                    <SnippetTable description={description} />
                </div>
                <div className='snippet__info'>
                    <div className='info-wrapper'>
                        <p className='snippet__text'>{filename}</p>
                        <p className='snippet__text'>{category}</p>
                        <p className='snippet__text'>{date}</p>
                    </div>
                    <button className='btn btn-delete'>Delete</button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SnippetPreview
