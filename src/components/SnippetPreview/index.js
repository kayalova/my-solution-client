import React from 'react'

import SnippetTable from './SnippetTable'
import './SnippetPreview.sass'

const SnippetPreview = () => {
    return (
        <React.Fragment>
            <section className="snippet">
                <div className="snippet__code">
                    <SnippetTable />
                </div>
                <div className="snippet__description">
                    <div className="description-wrapper">
                        <h4 className="snippet__text">task1.py</h4>
                        <p className="snippet__text">#backend</p>
                        <p className="snippet__text">12.12.2019</p>
                    </div>
                    <button className="btn btn-delete">Delete</button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SnippetPreview