export type ProductStatus = 'in-stock' | 'low-stock' | 'out-of-stock';

export interface Product{
    id:string;
    name:string;
    price:number;
    status:ProductStatus;
    category?:string;
}

export const stopwatch={
    now:0,
    startTime:0,
    intervalRef:null as number | null,
}

export interface Product{
    size:number;
}

export type TaskStatus = "todo"|"done";

export interface Task{
    id:number;
    text:string;
    status:TaskStatus;
}


export type Cuisine = 'indian' | 'italian' | 'chinese';
export interface Recipe { 
    id: string; 
    name: string; 
    ingredients: string[]; 
    time: string; 
}
