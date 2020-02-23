import React, { useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'

import Aside from '../../components/Aside'
import SnippetList from '../../components/SnippetPreviewList'
import SnippetPreview from '../../components/SnippetPreview'
import FabButton from '../../components/FAB'
import { getSnippetList } from '../../selectors/snippets'
import { getError } from '../../selectors/error'
import { getCategories } from '../../selectors/categories'
import { getFilters } from '../../selectors/filters'
import {
    setError,
    loadSnippets,
    updateFilters,
    loadCategories
} from '../../action-creators'
import './SearchSnippets.sass'

const SearchSnippets = () => {
    const dispatch = useDispatch()
    const error = useSelector(getError)
    const snippets = useSelector(getSnippetList)
    const categories = useSelector(getCategories)
    const formFilterValues = useSelector(getFilters)
    const {
        filename,
        category,
        description,
        endDate,
        startDate
    } = formFilterValues

    useEffect(() => {
        setError('', error)
        dispatch(updateFilters({ endDate: new Date().getTime() }))
        dispatch(loadCategories())
        dispatch(loadSnippets({}))
    }, [error])

    const handleAsideSubmit = useCallback(
        e => {
            e.preventDefault()
            dispatch(
                loadSnippets({
                    category,
                    description,
                    userFilename: filename,
                    endDate,
                    startDate
                })
            )
        },
        [formFilterValues]
    )

    const handleAsideInputsChange = useCallback(
        e => {
            const target = { [e.target.name]: e.target.value }
            dispatch(updateFilters(target))
        },
        [filename, category, description, dispatch]
    )

    const snippetList = useMemo(() => {
        return snippets.map(snippet => (
            <article className='article' key={snippet._id}>
                <SnippetPreview snippet={snippet} />
            </article>
        ))
    }, [snippets])

    return (
        <div className='search-container'>
            <Aside
                categories={categories}
                handleSubmit={handleAsideSubmit}
                handleInputsChange={handleAsideInputsChange}
                values={{ filename, description, category }}
            />
            <SnippetList snippetList={snippetList} />
            <Link to={'/create'}>
                <FabButton icon={<AddIcon />} />
            </Link>
        </div>
    )
}

export default SearchSnippets
