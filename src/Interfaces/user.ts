export interface Name {
    title: string,
    first: string,
    last: string,
}

export interface Coordinates {
    latitude: string,
    longitude: string,
}
export interface TimeZone {
    offset: string,
    description: string,
}
export interface Street {
    number: number,
    name: string,
}
export interface Address {
    street: Street,
    city: string,
    state: string,
    postcode: number,
    coordinates:Coordinates,
    timezone: TimeZone,
}
export interface LoginCredentials {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
}

export interface DOB {
    date: string,
    age: number,
}

export interface DateRegistered {
    date: string,
    age: number,
}

export interface ID {
    name: string,
    value: string,
}

export interface Picture {
    large: string,
    medium: string,
    thumbnail:string,
}

// export interface HttpResponse<IUser> extends Response {
//     parsedBody?: IUser,
// }

export interface IUser {
    gender: string,
    name: Name,
    location: Address,
    email: string,
    login: LoginCredentials
    dob: DOB,
    registered: DateRegistered,
    phone: string,
    cell: string,
    id: ID,
    picture: Picture,
    nat: string
}
