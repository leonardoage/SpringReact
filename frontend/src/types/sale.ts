import { Seller } from "./seller";

export type Sales = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
};

export type SalePage = { 
    content?: Sales[];

    last:  boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    numberOfElements?: number;
    first: boolean;
    empty?: boolean;
};

export type SalesSum = {
    sellerName: string;
    sum: number;
};

export type SalesSuccess = {
    sellername: string;
    visited: number;
    deals: number;
};