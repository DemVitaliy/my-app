export type ProfilePhotosType = {
    small: string | null,
    large: string | null
}
export type UserType = {
    name: string,
    id: number,
    photos: ProfilePhotosType,
    status: string,
    followed: boolean
}