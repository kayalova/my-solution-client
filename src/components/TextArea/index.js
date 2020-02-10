import React, { useState, useRef } from 'react'

import { fillNumberLine } from '../../helpers'
import './TextArea.sass'

const TextArea = ({ handleChange, value, name, isDisabled, rows }) => {
    const numLine = useRef(null)
    const code = useRef(null)

    const [numberLine, setNumberLine] = useState(fillNumberLine(rows || 15))

    const setNumberTextArea = count => {
        let value = fillNumberLine(count)
        setNumberLine(value)

        scrollDownTaCode() // downTa?  Spain? ta- textarea; как до этого догадаться можно. scrollTo downTo downTa  Templar Assasin ))^))0ЖВ
        scrollDownTaNumLine()
    }

    const scrollDownTaNumLine = () => {
        numLine.current.scrollTop = numLine.current.scrollHeight
    }

    const scrollDownTaCode = () => {
        code.current.scrollTop = code.current.scrollHeight
    }

    // вахъ, все-таки через вычисления сделала? обсуждали же, на сервере по хорошему тоже как то поправиыть
    // я помню. кароч хз. поправить на бэке нужно будет. и можно оттуда взять эту логику и применить тут. сама смотри.
    // ну ты знаешь что я думаю об этом даже? или я не говорил?ты предложил другой вариант и сказал что этот не одобряешь. а
    // во, всё. значит предупреждена и я могу сказать "я же гвоорил"
    // но мой вариант безопасный. ложная лож. потом попробую поискать проблемы с этим вариантом.
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
                rows={rows || 15}
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
                rows={rows || 15}
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
