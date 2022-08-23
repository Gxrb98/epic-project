export interface userAuth {
    email: string | undefined,
    pass: string | undefined
}

export interface user {
    _id: string
    email: string,
    pass: string,
    name?: string
}