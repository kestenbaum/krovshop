
export interface IMetalTile {
    id: number
    article: number
    availability: boolean
    title: string
    img: any
    price: number
}

{/** --Basket-- **/}
export interface IBasket {
    id?: number
    title?: string
    img?: any
    price?: number
    count ?: number
    article?: number
    availability?: boolean
}

