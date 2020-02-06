import React, { useState, useCallback, useRef } from 'react'
import FormControl from '@material-ui/core/FormControl'

import InputText from '../Input'
import InputSelect from '../Select'
import TextArea from '../TextArea'
import Button from '../Button'
import { CATEGORIES } from '../../constants'
import { BTN_CREATE_STYLES, DESCRIPTION_STYLES } from '../../constants/styles'
import './CreateSnippet.sass'

const CreateSnippet = () => {
    const [isBtnDisabled, setBtnDisabled] = useState(true)

    const [snippetFields, setSnippetFields] = useState({
        filename: '',
        description: '',
        category: '',
        code: ''
    })

    const { filename, description, category, code } = snippetFields

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

    const getEmptyFields = form => {
        const fields = Object.keys(form)

        const invalidInputs = fields.reduce((invalid, field) => {
            if (!form[field]?.trim()) invalid.push(field)

            return invalid
        }, [])

        return invalidInputs
    }

    const isEmpty = str => Boolean(str?.trim().length)

    return (
        <section className='section'>
            <h2 className='subtitle'>Few steps to create a snippet</h2>
            <FormControl>
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
                    variant={'filled'}
                    label={'Snippet description...'}
                    value={description}
                    handleChange={handleChange}
                />
                <InputSelect
                    name={'category'}
                    inputLabel={'Category'}
                    labelId={'category-label'}
                    selectId={'category-select'}
                    categories={CATEGORIES}
                    handleChange={handleChange}
                    value={category}
                />
                <TextArea
                    handleChange={handleChange}
                    value={code}
                    name={'code'}
                />
                <Button
                    text={'Create'}
                    variant={'contained'}
                    size={'medium'}
                    style={BTN_CREATE_STYLES}
                    isDisabled={isBtnDisabled}
                />
            </FormControl>
        </section>
    )
}

export default CreateSnippet
