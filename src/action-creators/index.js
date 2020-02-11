import { UPDATE_FILTERS, GET_SNIPPET_LIST, DELETE_SNIPPET } from '../constants'

export const updateFilters = formField => {
    return {
        type: UPDATE_FILTERS,
        payload: formField
    }
}

export const loadSnippets = snippets => {
    return {
        type: GET_SNIPPET_LIST,
        payload: snippets
    }
}

export const removeSnippet = snippetID => {
    return {
        type: DELETE_SNIPPET,
        payload: snippetID
    }
}
