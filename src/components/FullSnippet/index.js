import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-tomorrow'

import { getFullDate, getEntryCount } from '../../helpers'
import FabButton from '../FAB'
import './FullSnippet.sass'

const FullSnippet = props => {
    const { snippet, code } = props.location.state
    const { userFilename: filename, description, category, createdAt } = snippet

    const date = getFullDate(createdAt)
    const rows = getEntryCount(code, /\n/g) + 1

    return (
        <section className='section section-fullSnippet'>
            <span className='snippet-text'>{filename}</span>
            <span className='snippet-text'>{description}</span>
            <span className='snippet-text'>{category.title}</span>
            <span className='snippet-text'>{date}</span>

            <div className='ace-wrapper'>
                <AceEditor
                    mode='javascript'
                    theme='tomorrow'
                    value={code}
                    showPrintMargin={false}
                    width={'100%'}
                    height={`${rows * 14}px`}
                    readOnly
                />
            </div>

            <Link to='/snippets'>
                <FabButton icon={<KeyboardBackspaceIcon />} />
            </Link>
        </section>
    )
}

export default FullSnippet
