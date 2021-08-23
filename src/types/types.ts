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
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    aboutMe: string | null,
    contacts: ProfileContactsType,
    photos: ProfilePhotosType
}
export type ProfileContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
