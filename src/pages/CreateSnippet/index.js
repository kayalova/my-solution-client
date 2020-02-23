import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-tomorrow'

import InputText from '../../components/Input'
import InputSelect from '../../components/Select'
import Button from '../../components/Button'
import { getEmptyFields } from '../../helpers'
import { fetchCreateSnippet, loadCategories } from '../../action-creators'
import { BTN_CREATE_STYLES, DESCRIPTION_STYLES } from '../../constants/styles'
import { getCategories } from '../../selectors/categories'
import './CreateSnippet.sass'

const CreateSnippet = () => {
    const history = useHistory()
    const dispatch = useDispatch(getCategories)
    const categories = useSelector(getCategories)
    const [isBtnDisabled, setBtnDisabled] = useState(true)
    const [snippetFields, setSnippetFields] = useState({
        filename: '',
        description: '',
        category: '',
        code: ''
    })

    const { filename, description, category, code } = snippetFields

    useEffect(() => {
        dispatch(loadCategories())
    }, [])

    const determineBtnState = useCallback(
        form => {
            const isEmptyFieldsFields = Boolean(getEmptyFields(form).length)
            setBtnDisabled(isEmptyFieldsFields)
        },
        [snippetFields]
    )

    const handleChange = useCallback(
        e => {
            const target = { [e.target.name]: e.target.value }

            setSnippetFields({
                ...snippetFields,
                ...target
            })

            determineBtnState({ ...snippetFields, ...target })
        },
        [filename, description, category, code]
    )

    const handleChangeEditor = useCallback(
        e => {
            const target = { code: e }
            setSnippetFields({
                ...snippetFields,
                ...target
            })

            determineBtnState({ ...snippetFields, ...target })
        },
        [filename, description, category, code]
    )

    const handleSubmit = e => {
        e.preventDefault()
        const data = { userFilename: filename, description, category, code }
        dispatch(fetchCreateSnippet(data, history))
    }

    return (
        <section className='section section-create'>
            <h2 className='subtitle'>Few steps to create a snippet</h2>
            <form className='form' onSubmit={handleSubmit}>
                <InputText
                    name='filename'
                    variant='filled'
                    label='[name].[ext]'
                    value={filename}
                    handleChange={handleChange}
                />

                <InputText
                    style={DESCRIPTION_STYLES}
                    name='description'
                    label='Snippet description...'
                    value={description}
                    handleChange={handleChange}
                />
                <InputSelect
                    name={'category'}
                    inputLabel='Category'
                    labelId='category-label'
                    selectId='category-select'
                    items={categories}
                    handleChange={handleChange}
                    value={category}
                />
                <AceEditor
                    mode='javascript'
                    theme='tomorrow'
                    onChange={handleChangeEditor}
                    value={code}
                    showPrintMargin={false}
                    width='100%'
                />
                <Button
                    type='submit'
                    id='form-create'
                    text='Create'
                    variant='contained'
                    size='medium'
                    style={BTN_CREATE_STYLES}
                    isDisabled={isBtnDisabled}
                />
            </form>
        </section>
    )
}

export default CreateSnippet
