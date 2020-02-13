import { combineReducers } from 'redux'
import snippets from './snippetsList.js'
import filter from './filters.js'
import error from './errors.js'

export default combineReducers({
    snippets,
    filter,
    error
})
