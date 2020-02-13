import { SET_ERROR } from '../constants'

export default (errorState = false, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_ERROR:
            return payload
        default:
            return errorState
    }
}
