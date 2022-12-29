import { Station } from "./station";

export class Train{
    _id	:number;
    number: number;
    from: string;
    departure	: Date;
    to	:string;
    arrival	:Date;
    travels	: number;
    type	: string;
    price :number;
    stations : Station [];
    constructor(obj? : any){
        this._id = obj && obj._id || null;
        this.number = obj && obj.number || null;
        this.from = obj && obj.from || null;
        this.departure = obj && new Date(obj.departure) || null;
        this.to = obj && obj.to || null;
        this.arrival = obj && new Date(obj.arrival) || null;
        this.travels = obj && obj.travels || null;
        this.type = obj && obj.type || null;
        this.price = obj && obj.price || null;
        this.stations= obj && obj.stations || null;
    }
}