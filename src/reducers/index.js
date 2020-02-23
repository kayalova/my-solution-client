import { combineReducers } from 'redux'
import snippets from './snippetsList'
import filter from './filters'
import categories from './categories'
import error from './errors'

export default combineReducers({
    snippets,
    filter,
    categories,
    error
})
