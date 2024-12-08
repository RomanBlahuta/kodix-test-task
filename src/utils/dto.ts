export interface IPostDTO {
    userId: number
    id: number
    title: string
    body: string
}



export interface ICommentDTO {
    postId: number
    id: number
    name: string
    email: string
    body: string
}



export interface IUserDTO {
    id: number
    name: string
    username: string
    email: string
    address: IAddressDTO
    phone: string
    website: string
    company: ICompanyDTO
}

export interface IAddressDTO {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IGeoDTO
}

export interface IGeoDTO {
    lat: string
    lng: string
}

export interface ICompanyDTO {
    name: string
    catchPhrase: string
    bs: string
}
