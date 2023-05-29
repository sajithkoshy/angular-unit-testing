import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: PostModel[] = []
  constructor(){}

  ngOnInit():void{
    this.getPosts();
  }

  getPosts(){

  }

  delete(post: any){

  }

}
