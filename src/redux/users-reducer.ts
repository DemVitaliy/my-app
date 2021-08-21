const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
    users: [
        {
            id: 1,
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7K1qlnxCTLPkjZEbld9vM7aAny4QvDmaaQ&usqp=CAU",
            followed: false,
            fullName: "Oleg",
            status: "It's my status!!!",
            location: {country: "Ukraine", city: "Lviv"}
        },
        {
            id: 2,
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7K1qlnxCTLPkjZEbld9vM7aAny4QvDmaaQ&usqp=CAU",
            followed: true,
            fullName: "Dima",
            status: "Hi)",
            location: {country: "Ukraine", city: "Kiev"}
            },
        {
            id: 3,
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7K1qlnxCTLPkjZEbld9vM7aAny4QvDmaaQ&usqp=CAU",
            followed: false,
            fullName: "Sveta",
            status: "Yo Yo Yo",
            location: {country: "Russia", city: "Moscow"}
            },
        {
            id: 4,
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7K1qlnxCTLPkjZEbld9vM7aAny4QvDmaaQ&usqp=CAU",
            followed: true,
            fullName: "Sasha",
            status: "=)",
            location: {country: "Belarus", city: "Minsk"}
        }
    ]
}

const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state

    }
}

export const followAC = (userId: any) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users:any) => ({type: SET_USERS, users})

export default usersReducer