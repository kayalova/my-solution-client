import React, { useState, useRef, useEffect } from 'react'

import { fillNumberLine, getEntryCount } from '../../helpers'
import './TextArea.sass'

const TextArea = ({ handleChange, value, name, isDisabled }) => {
    const numLine = useRef(null)
    const code = useRef(null)

    const rows = getEntryCount(value, /\n/g) + 1

    const [numberLine, setNumberLine] = useState(fillNumberLine(rows || 15))

    const setMaxHeight = () => {
        numLine.current.style.maxHeight = '400px'
        code.current.style.maxHeight = '400px'
    }

    useEffect(() => {
        if (!isDisabled) setMaxHeight()
    }, [])

    const setNumberTextArea = count => {
        let value = fillNumberLine(count)
        setNumberLine(value)

        scrollDownCode()
        scrollDownNumLine()
    }

    const scrollDownNumLine = () =>
        (numLine.current.scrollTop = numLine.current.scrollHeight)

    const scrollDownCode = () =>
        (code.current.scrollTop = code.current.scrollHeight)

    const keyUpHandler = e => {
        const rows = (e.target.scrollHeight - 20) / 18 // 18 is the height of a row, 20 - padding
        setNumberTextArea(rows)
    }

    const scrollCodeHandler = e =>
        (numLine.current.scrollTop = e.target.scrollTop)

    const scrollNumLineHandler = e =>
        (code.current.scrollTop = e.target.scrollTop)

    return (
        <div className='textarea-wrapper '>
            <textarea
                id='textarea-num'
                rows={rows}
                cols='3'
                className='textarea textarea-numbers'
                ref={numLine}
                value={numberLine}
                onScroll={scrollNumLineHandler}
                disabled
            />
            <textarea
                spellCheck='false'
                name={name}
                id='textarea-code'
                rows={rows}
                className='textarea textarea-code'
                ref={code}
                value={value}
                onChange={handleChange}
                onKeyUp={keyUpHandler}
                onScroll={scrollCodeHandler}
                disabled={isDisabled}
            ></textarea>
        </div>
    )
}

export default TextArea
