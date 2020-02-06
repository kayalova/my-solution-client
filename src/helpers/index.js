export const fillNumberLine = number => {
    let line = ''

    for (let i = 0; i < number; i++) {
        line += `${i + 1} \n`
    }

    return line.slice(0, line.length - 1)
}
