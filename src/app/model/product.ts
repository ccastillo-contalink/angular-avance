export interface Product {
    title: string;
    size: string;
    quantity: number;
    price: number;
    amount?: number;
}

export enum Size {
    XL=  'XL',
    CH= 'CH',
    L='L'
}