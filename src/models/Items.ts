
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
    id: number
    img: any
    totalPrice: number
    count: number
}