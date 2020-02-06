import React, { useState, useCallback } from 'react'
import FormControl from '@material-ui/core/FormControl'

import InputText from '../Input'
import InputSelect from '../Select'
import TextArea from '../TextArea'
import Button from '../Button'
import { CATEGORIES } from '../../constants'
import { BTN_CREATE_STYLES, DESCRIPTION_STYLES } from '../../constants/styles'
import './CreateSnippet.sass'

const CreateSnippet = () => {
    const [snippetFields, changeSnippetFields] = useState({
        filename: '',
        description: '',
        category: '',
        code: ''
    })

    const { filename, description, category, code } = snippetFields

    const handleChange = useCallback(
        e => {
            const target = { [e.target.name]: e.target.value }
            changeSnippetFields({
                ...snippetFields,
                ...target
            })
        },
        [filename, description, category]
    )

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
                    isDisabled={true}
                />
            </FormControl>
        </section>
    )
}

export default CreateSnippet
