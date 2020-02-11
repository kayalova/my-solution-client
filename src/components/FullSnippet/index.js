import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

import { getFullDate } from '../../helpers'
import FabButton from '../FAB'
import Textarea from '../TextArea'
import './FullSnippet.sass'

const FullSnippet = props => {
    const { snippet, code } = props.location.state
    const { userFilename: filename, description, category, createdAt } = snippet
    const date = getFullDate(createdAt)

    return (
        <section className='section section-fullSnippet'>
            <span className='snippet-text'>{filename}</span>
            <span className='snippet-text'>{description}</span>
            <span className='snippet-text'>{category.title}</span>
            <span className='snippet-text'>{date}</span>
            <Textarea value={code} isDisabled={true} />
            <Link to='/snippets'>
                <FabButton icon={<KeyboardBackspaceIcon />} />
            </Link>
        </section>
    )
}

export default FullSnippet
