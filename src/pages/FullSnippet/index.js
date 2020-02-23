import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/mode-javascript'

import { getSnippetList } from '../../selectors/snippets'
import { getFullDate, getEntryCount } from '../../helpers'
import FabButton from '../../components/FAB'
import './FullSnippet.sass'

const FullSnippet = () => {
    const [snippet] = useSelector(getSnippetList)
    const {
        userFilename: filename,
        description,
        category,
        createdAt,
        code
    } = snippet

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
                    width='100%'
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
