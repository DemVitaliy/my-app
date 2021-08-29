import {applyMiddleware, combineReducers, createStore, Action} from "redux"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

type RootReducer = typeof rootReducer
export type AppStateType = ReturnType<RootReducer>

export type InferActionTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never
export type CommonThunkType<AT extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>