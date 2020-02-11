import { UPDATE_FILTERS } from '../constants'

const state = {
    filename: '',
    category: '',
    startDate: 0,
    endDate: new Date().getTime(),
    description: ''
}

export default (filterState = state, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_FILTERS:
            return { ...filterState, ...payload }
        default:
            return filterState
    }
}
