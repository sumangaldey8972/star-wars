import { LOGIN_FAILED, LOGIN_SUCCESSFULL } from "./auth.type"

const initial_state = {
    logged_in_user_details: {},
    isAuth: false
}

export const auth_reducer = (state = initial_state, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case LOGIN_SUCCESSFULL: {
            return {
                ...state,
                logged_in_user_details: payload,
                isAuth: true
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                isAuth: false,
            }
        }
        default: {
            return state
        }
    }
}