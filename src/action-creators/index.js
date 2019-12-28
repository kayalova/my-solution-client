import { CHANGE_INPUTS } from '../constants'

export const filter = (formField) => {
    return {
        type: CHANGE_INPUTS,
        payload: formField
    }
}