import HttpClient from './httpClient'
import { CATEGORIES, SNIPPET_LIST, CREATE, DELETE } from '../constants/url'

export const getCategories = async () =>
    await HttpClient.get(new URL(CATEGORIES))

export const getSnippet = async id =>
    await HttpClient.get(new URL(SNIPPET_LIST), id)

export const getSnippets = async filter =>
    await HttpClient.get(new URL(SNIPPET_LIST), filter)

export const createSnippet = async snippet =>
    await HttpClient.post(new URL(CREATE), snippet)

export const deleteSnippet = async snippetID =>
    await HttpClient.deleteOne(new URL(DELETE), snippetID)
