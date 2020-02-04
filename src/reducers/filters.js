import { CHANGE_FILTERS } from '../constants'

const state = {
    filename: '',
    category: '',
    startDate: 0,
    endDate: new Date().getTime(),
    description: ''
}

// where to put server request  ?
export default (filterState = state, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_FILTERS:
            return { ...filterState, ...payload }
        default:
            return filterState
    }
}
