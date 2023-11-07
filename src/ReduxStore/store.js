import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { auth_reducer } from "./Auth/auth.reducer";


const root_reducers = combineReducers({
    auth: auth_reducer
})

export const store = legacy_createStore(root_reducers, applyMiddleware(thunk))