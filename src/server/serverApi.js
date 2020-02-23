import HttpClient from './httpClient'
import { CATEGORIES, SNIPPET_LIST, CREATE, DELETE } from '../constants/url'

const getCategories = async () => await HttpClient.get(new URL(CATEGORIES))

const getSnippet = async id => await HttpClient.get(new URL(SNIPPET_LIST), id)

const getSnippets = async filter =>
    await HttpClient.get(new URL(SNIPPET_LIST), filter)

const createSnippet = async snippet =>
    await HttpClient.post(new URL(CREATE), snippet)

const deleteSnippet = async snippetID =>
    await HttpClient.deleteOne(new URL(DELETE), snippetID)

const serverApi = {
    getCategories,
    getSnippet,
    getSnippets,
    createSnippet,
    deleteSnippet
}

export default serverApi
