import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://api.npoint.io/c611088a1666a2b6ee82";

@Injectable()
export default class DataManager{
    constructor(private http: HttpClient) { }

    /**
     *  getData
     */
    public  getData(): Observable<any> {
        return this.http.get(API_URL)
    }

}