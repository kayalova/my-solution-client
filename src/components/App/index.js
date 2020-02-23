import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary'
import Header from '../Header'
import SearchSnippets from '../../pages/SearchSnippets'
import CreateSnippet from '../../pages/CreateSnippet'
import FullSnippet from '../../pages/FullSnippet'
import './App.sass'

const App = () => {
    return (
        <BrowserRouter>
            <div className='page'>
                <Header />
                <div className='wrapper'>
                    <main className='main'>
                        <ErrorBoundary>
                            <Switch>
                                <Route exact path='/'>
                                    <Redirect to='/snippets' />
                                </Route>
                                <Route
                                    exact
                                    path='/snippets'
                                    component={SearchSnippets}
                                />
                                <Route
                                    path='/create'
                                    component={CreateSnippet}
                                />
                                <Route
                                    path='/snippets/:id'
                                    component={FullSnippet}
                                />
                            </Switch>
                        </ErrorBoundary>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
