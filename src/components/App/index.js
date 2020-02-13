import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'

import AddIcon from '@material-ui/icons/Add'
import Header from '../Header'
import Aside from '../Aside/'
import SnippetList from '../SnippetPreviewList'
import SearchContainer from '../SearchContainer'
import FabButton from '../FAB'
import CreateSnippet from '../CreateSnippet'
import FullSnippet from '../FullSnippet'
import './App.sass'

const App = () => {
    return (
        <BrowserRouter>
            <div className='page'>
                <Header />
                <div className='wrapper'>
                    <main className='main'>
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to='/snippets' />
                            </Route>
                            <Route
                                exact
                                path='/snippets'
                                render={props => (
                                    <SearchContainer>
                                        <Aside {...props} />
                                        <SnippetList {...props} />
                                        <Link to={'/create'}>
                                            <FabButton icon={<AddIcon />} />
                                        </Link>
                                    </SearchContainer>
                                )}
                            />
                            <Route path='/create' component={CreateSnippet} />
                            <Route
                                path='/snippets/:id'
                                component={FullSnippet}
                            />
                        </Switch>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
