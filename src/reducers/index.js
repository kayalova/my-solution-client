import { combineReducers } from 'redux'
import snippets from './snippetsList.js'
import filter from './filters.js'

export default combineReducers({
    snippets,
    filter
})