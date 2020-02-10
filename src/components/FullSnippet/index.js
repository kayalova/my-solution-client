import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

import FabButton from '../FAB'
import { getEntriesCount } from '../../helpers'
import Textarea from '../TextArea'
import './FullSnippet.sass'

const FullSnippet = props => {
    const { snippet, code } = props.location.state
    const { userFilename: filename, description, category } = snippet

    const rows = getEntriesCount(code, /\n/g)

    return (
        <section className='section section-fullSnippet'>
            <span className='snippet-text'>{filename}</span>
            <span className='snippet-text'>{description}</span>
            <span className='snippet-text'>{category.title}</span>
            <Textarea value={code} isDisabled={true} rows={rows + 1} />
            <Link to='/snippets'>
                <FabButton icon={<KeyboardBackspaceIcon />} />
            </Link>
        </section>
    )
}

export default FullSnippet
