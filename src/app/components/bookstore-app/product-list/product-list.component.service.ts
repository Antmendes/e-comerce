import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Book } from "./model/book";

@Injectable()

export class Bookservice{
    private url = 'http://localhost:3001/Book';

    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
}