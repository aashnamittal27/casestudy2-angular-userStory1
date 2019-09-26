import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  public constructor(private http:HttpClient) { }

  public getStartUpOptions(arguements:string):Observable<any>
  {
    console.log(arguements+"");
    console.log(typeof(arguements));
    var idx= arguements.indexOf('/');
    console.log(idx);
    console.log('http://localhost:8080/api/startUp/'+arguements);
    return this.http.get('http://localhost:8080/api/startUp/'+arguements);
  }
  // public getStartUpOptions(option1:number):Observable<any>
  // {
  //   return this.http.get('http://localhost:8080/api/startUp/'+option1);
  // }
}
