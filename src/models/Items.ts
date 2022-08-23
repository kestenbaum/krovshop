/*---- Metal ----*/
export interface IMetal {
    id: number
    article: number
    availability: boolean
    title: string
    img: any
    price: number
    favorite: boolean
}

/*---- Basket-- -----*/
export interface IBasket {
    id?: number
    article?: number
    availability?: boolean
    title?: string
    img?: any
    price?: number
    count?: number
}

/*---- favorites -----*/

export interface IFavoriteElement {
    disabled?: boolean
    id?: number
    article?: number
    availability?: boolean
    title?: string
    img?: any
    price?: number
    count?: number
}

