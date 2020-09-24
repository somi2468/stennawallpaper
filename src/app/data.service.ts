import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url="http://127.0.0.1:8000/api/";
  constructor(private http:HttpClient) { }

  getdata():Observable<any>{  // converts data in array type

    return this.http.get(this.url+'allData')
  }

  getBlog(BlogID: number):Observable<any>{
    return this.http.get<Blog>(this.url + 'show/' + BlogID);
  }
}
