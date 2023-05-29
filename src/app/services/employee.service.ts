import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
   jsonUrl = "https://jsonplaceholder.typicode.com/";
   
  constructor(
    private http: HttpClient
  ) { }

  SaveDetails(info: { sumVal: number; name: string; }) {
    return this.http.post('https://localhost:4200', info);
  }

  public getListOfData()
  {
    return this.http.get<PostModel[]>(this.jsonUrl+'posts');
  }

  public PostListOfData(post:PostModel)
  {
    const headers = new HttpHeaders();
    return this.http.post(this.jsonUrl + 'posts',post,{headers});
  }
}