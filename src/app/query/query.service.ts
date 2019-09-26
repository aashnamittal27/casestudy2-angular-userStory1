import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Query } from './query'
import { Interest } from '../sales/interest';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
    public constructor(private http:HttpClient) { }

    public submitQuery(arguements:Query):Observable<any>
    {
       return this.http.post<any>('http://localhost:8080/api/interest', arguements);
    } 

    public getInterests():Observable<any> 
    {
      return this.http.get('http://localhost:8080/api/interest');
    }

}