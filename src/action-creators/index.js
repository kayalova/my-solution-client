import {
    UPDATE_FILTERS,
    GET_SNIPPET_LIST,
    DELETE_SNIPPET,
    SET_ERROR,
    SET_CATEGORIES,
    GET_ONE_SNIPPET
} from '../constants'
import serverApi from '../server/serverApi'

export const setError = (msg, hasError = true) => {
    return {
        type: SET_ERROR,
        payload: {
            hasError,
            errMessage: msg
        }
    }
}

export const updateFilters = formField => {
    return {
        type: UPDATE_FILTERS,
        payload: formField
    }
}

export const loadSnippets = filters => dispatch => {
    serverApi
        .getSnippets(filters)
        .then(response => {
            if (response.stack) dispatch(setError(response.stack))
            else
                dispatch({
                    type: GET_SNIPPET_LIST,
                    payload: response
                })
        })
        .catch(err => setError(err))
}

export const loadCategories = () => dispatch => {
    serverApi
        .getCategories()
        .then(response => {
            if (response.stack) dispatch(setError(response.stack))
            else
                dispatch({
                    type: SET_CATEGORIES,
                    payload: response
                })
        })
        .catch(err => dispatch(setError(err)))
}

export const fetchCreateSnippet = (snippet, history) => dispatch => {
    serverApi.createSnippet(snippet).then(response => {
        if (response.stack) dispatch(setError(response.stack))
        else history.push('/snippets')
    })
}

export const loadOneSnippet = (_id, history) => dispatch => {
    serverApi
        .getSnippet(_id)
        .then(response => {
            if (response.stack) setError(response.stack)
            else {
                dispatch({
                    type: GET_ONE_SNIPPET,
                    payload: response
                })
                history.push(`/snippets/${_id}`)
            }
        })
        .catch(err => setError(err))
}

export const fetchDeleteSnippet = _id => dispatch => {
    serverApi
        .deleteSnippet(_id)
        .then(resp => {
            if (resp.stack) setError(resp.stack)
            else
                dispatch({
                    type: DELETE_SNIPPET,
                    payload: _id
                })
        })
        .catch(err => setError(err))
}
