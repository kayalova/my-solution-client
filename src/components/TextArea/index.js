import React, { useState, useRef } from 'react'

import { fillNumberLine } from '../../helpers'
import './TextArea.sass'

const TextArea = ({ handleChange, value, name }) => {
    const numLine = useRef(null)
    const code = useRef(null)

    const [numberLine, setNumberLine] = useState(fillNumberLine(15))

    const setNumberTextArea = count => {
        let value = fillNumberLine(count)
        setNumberLine(value)

        scrollDownTaCode()
        scrollDownTaNumLine()
    }

    const scrollDownTaNumLine = () => {
        numLine.current.scrollTop = numLine.current.scrollHeight
    }

    const scrollDownTaCode = () => {
        code.current.scrollTop = code.current.scrollHeight
    }

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
                rows='15'
                cols='3'
                className='textarea textarea-numbers'
                ref={numLine}
                value={numberLine}
                onScroll={scrollNumLineHandler}
                disabled
            />
            <textarea
                spellCheck='false'
                className='textarea'
                name={name}
                id='textarea-code'
                rows='15'
                className='textarea textarea-code'
                ref={code}
                value={value}
                onChange={handleChange}
                onKeyUp={keyUpHandler}
                onScroll={scrollCodeHandler}
            ></textarea>
        </div>
    )
}

export default TextArea
