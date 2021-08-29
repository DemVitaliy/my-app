import {getAuthUserData} from "./auth-reducer"
import {CommonThunkType, InferActionTypes} from "./redux-store"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "app/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const appActions = {
    initializedSuccess: () => ({type: "app/INITIALIZED_SUCCESS"} as const)
}

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(appActions.initializedSuccess())
}

export default appReducer

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionTypes<typeof appActions>
type ThunkType = CommonThunkType<ActionsTypes>