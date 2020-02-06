import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Header from '../Header'
import Aside from '../Aside/'
import SnippetPreview from '../SnippetPreview'
import SearchSnippets from '../SearchSnippets'
import AddButton from '../AddButton'
import CreateSnippet from '../CreateSnippet'
import './App.sass'

const App = () => {
    const snippets = useSelector(state => state.snippets)
    const snippetsList = snippets.map((snippet, index) => (
        <SnippetPreview snippet={snippet} key={index} />
    ))

    return (
        <BrowserRouter>
            <div className='page'>
                <Header />
                <div className='wrapper'>
                    <main className='main'>
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={props => (
                                    <SearchSnippets>
                                        <Aside />
                                        <article className='article'>
                                            {snippetsList}
                                        </article>
                                        <Link to={'/create'}>
                                            <AddButton />
                                        </Link>
                                    </SearchSnippets>
                                )}
                            />
                            <Route path='/create' component={CreateSnippet} />
                            {/* <CreateSnippet /> */}
                            {/* <FullSnippet /> */}
                        </Switch>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
