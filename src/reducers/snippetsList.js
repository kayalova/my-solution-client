import { GET_SNIPPET_LIST, DELETE_SNIPPET, GET_ONE_SNIPPET } from '../constants'

const updateSnippetList = (snippets, id) =>
    snippets.filter(snippet => snippet._id !== id)

export default (snippets = [], action) => {
    const { type, payload } = action

    switch (type) {
        case GET_SNIPPET_LIST:
            return payload
        case GET_ONE_SNIPPET:
            return payload
        case DELETE_SNIPPET:
            return updateSnippetList(snippets, payload)
        default:
            return snippets
    }
}
