import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-tomorrow'

import InputText from '../Input'
import InputSelect from '../Select'
import Button from '../Button'
import { getEmptyFields } from '../../helpers'
import { setError } from '../../action-creators'
import { BTN_CREATE_STYLES, DESCRIPTION_STYLES } from '../../constants/styles'
import { createSnippet, getCategories } from '../../server/serverApi'
import './CreateSnippet.sass'

const CreateSnippet = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [isBtnDisabled, setBtnDisabled] = useState(true)
    const [categories, setCategories] = useState([])
    const [snippetFields, setSnippetFields] = useState({
        filename: '',
        description: '',
        category: '',
        code: ''
    })

    const { filename, description, category, code } = snippetFields

    useEffect(() => {
        getCategories()
            .then(cats => setCategories(cats))
            .catch(err => console.log(err))
    }, [])

    const handleChange = useCallback(
        e => {
            const target =
                typeof e === 'object'
                    ? { [e.target.name]: e.target.value }
                    : { code: e }
            setSnippetFields({
                ...snippetFields,
                ...target
            })
            const areEmptyFields = Boolean(
                getEmptyFields({ ...snippetFields, ...target }).length
            )

            setBtnDisabled(areEmptyFields)
        },
        [filename, description, category, code]
    )

    const handleSubmit = e => {
        e.preventDefault()
        const data = { userFilename: filename, description, category, code }
        createSnippet(data)
            .then(response => {
                if (response.message !== 'Snippet successfully created')
                    dispatch(setError(response.message))
                else {
                    history.push('/snippets', {
                        createdSnippet: {
                            userFilename: filename,
                            description,
                            category
                        }
                    })
                }
            })
            .catch(err => dispatch(setError(err)))
    }

    return (
        <section className='section section-create'>
            <h2 className='subtitle'>Few steps to create a snippet</h2>
            <form className='form' onSubmit={handleSubmit}>
                <InputText
                    name={'filename'}
                    variant={'filled'}
                    label={'[name].[ext]'}
                    value={filename}
                    handleChange={handleChange}
                />

                <InputText
                    style={DESCRIPTION_STYLES}
                    name={'description'}
                    label={'Snippet description...'}
                    value={description}
                    handleChange={handleChange}
                />
                <InputSelect
                    name={'category'}
                    inputLabel={'Category'}
                    labelId={'category-label'}
                    selectId={'category-select'}
                    items={categories}
                    handleChange={handleChange}
                    value={category}
                />
                <AceEditor
                    mode='javascript'
                    theme='tomorrow'
                    onChange={handleChange}
                    value={code}
                    showPrintMargin={false}
                    width={'100%'}
                />
                <Button
                    type='submit'
                    id='form-create'
                    text={'Create'}
                    variant={'contained'}
                    size={'medium'}
                    style={BTN_CREATE_STYLES}
                    isDisabled={isBtnDisabled}
                />
            </form>
        </section>
    )
}

export default CreateSnippet
