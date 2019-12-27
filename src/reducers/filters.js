const state = {
    filename: '',
    category: '',
    startDate: '2014-08-18',
    endDate: '2014-08-18',
    description: ''
}

// where to put server request  ?
export default (filterState = state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'CHANGE_INPUTS':
            return { ...filterState, ...payload }
        default:
            return filterState
    }
}