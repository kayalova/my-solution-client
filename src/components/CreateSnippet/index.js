import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import InputText from '../Input'
import InputSelect from '../Select'
import TextArea from '../TextArea'
import Button from '../Button'
import { getEmptyFields } from '../../helpers'
import { BTN_CREATE_STYLES, DESCRIPTION_STYLES } from '../../constants/styles'
import { createSnippet, getCategories } from '../../server/serverApi'
import './CreateSnippet.sass'

const CreateSnippet = () => {
    const history = useHistory()
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
            const target = { [e.target.name]: e.target.value }
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
            .then(() => {
                history.push('/snippets', {
                    createdSnippet: {
                        userFilename: filename,
                        description,
                        category
                    }
                })
            })
            .catch(err => console.log(err))
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
                <TextArea
                    handleChange={handleChange}
                    value={code}
                    name={'code'}
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
