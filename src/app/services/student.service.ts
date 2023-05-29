import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})
export class StudentService{

    constructor(public http: HttpClient){}

    SaveDetails(info: any)
    {
        return this.http.post('https//localhost:5000',info);
    }
}