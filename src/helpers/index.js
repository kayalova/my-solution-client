export const fillNumberLine = number => {
    let line = ''

    for (let i = 0; i < number; i++) {
        line += `${i + 1} \n`
    }

    return line.slice(0, line.length - 1)
}

export const getEmptyFields = form => {
    const fields = Object.keys(form)

    const invalidInputs = fields.reduce((invalid, field) => {
        if (!form[field]?.trim()) invalid.push(field)

        return invalid
    }, [])

    return invalidInputs
}

export const getEntryCount = (str, entry) =>
    str.match(entry) ? str.match(entry).length : 1

const formatDate = date => (date.toString().length < 2 ? `0${date}` : date)

export const getFullDate = ms => {
    const date = new Date(ms)
    const year = date.getFullYear()
    const month = formatDate(date.getMonth() + 1)
    const day = formatDate(date.getDate())

    return `${day}.${month}.${year}`
}
