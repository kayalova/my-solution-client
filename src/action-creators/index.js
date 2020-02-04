import { CHANGE_FILTERS } from '../constants'

export const filter = formField => {
    return {
        type: CHANGE_FILTERS,
        payload: formField
    }
}
