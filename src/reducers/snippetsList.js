const state = [
    {
        filename: 'index.js',
        category: 'frontend',
        date: '12.12.2019',
        description: ` import React from 'react';
                        import Header from './components/Header'
                        import Aside from './components/Aside'
                        import SnippetPreview from './components/SnippetPreview'
                        import './App.sass';

                        const App = () => (
                            <div className="page">
                                <Aside />
                            <div className="wrapper">`
    },
    {
        filename: 'index.js',
        category: 'frontend',
        date: '12.12.2019',
        description: ` import React from 'react';
                        import Header from './components/Header'
                        import Aside from './components/Aside'
                        import SnippetPreview from './components/SnippetPreview'
                        import './App.sass';

                        const App = () => (
                            <div className="page">
                                <Aside />
                            <div className="wrapper">`
    }
]

export default (snippetsState = state, action) => {
    switch (action.type) {
        case 'FILTER_SNIPPETS':
            return 'what to return? data from sserver'
        default: return snippetsState
    }
}
