import { LOGIN_FAILED, LOGIN_SUCCESSFULL } from "./auth.type";

export const sign_in_action = (creds) => async (dispatch) => {
    console.log(creds)
    if (creds.status) {
        return dispatch({
            type: LOGIN_SUCCESSFULL,
            payload: creds.token,
        })
    } else {
        return dispatch({
            type: LOGIN_FAILED,
            payload: creds.message
        })
    }
};