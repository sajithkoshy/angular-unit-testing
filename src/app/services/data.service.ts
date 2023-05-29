import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   URL = 'http://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<PostModel[]>(`${this.URL}/posts`)

  }
  
}
