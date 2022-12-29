import { Train } from "./train";

export class SearchTrains{
    count: number;
    results: Train[];
    constructor(obj?:any){
        this.count= obj && obj.count || null;
        this.results = obj && obj.results || null;
    }
}