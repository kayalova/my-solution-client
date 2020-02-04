import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../Header'
import Aside from '../Aside/'
import SnippetPreview from '../SnippetPreview'
import './App.sass'

const App = () => {
    const snippets = useSelector(state => state.snippets)
    const snippetsList = snippets.map((snippet, index) => (
        <SnippetPreview snippet={snippet} key={index} />
    ))

    return (
        <div className='page'>
            <Header />
            <div className='wrapper'>
                <main className='main'>
                    {/* <Route1> */}
                    <Aside />
                    <article className='article'>{snippetsList}</article>
                    {/* /<Route1> */}
                    {/* <Route2>
                        <FullSnippet />
                    </Route2> */}
                    {/* <Route3>
                        <CreateSnippet />
                    </Route3> */}
                </main>
            </div>
        </div>
    )
}

export default App
