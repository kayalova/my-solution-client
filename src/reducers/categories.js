import { SET_CATEGORIES } from '../constants'

export default (state = [], action) => {
    const { type, payload } = action
    if (type === SET_CATEGORIES) return payload
    return state
}
