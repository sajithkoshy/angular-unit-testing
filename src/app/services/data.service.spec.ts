import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostModel } from '../post.model';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],  
      providers:[DataService]

    });
    service = TestBed.inject(DataService);
    httpMock= TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })


  it('should retrieve posts from APi when get method is called',()=>{
    const dummyPosts: PostModel []=[
      {userId: 1, id:1, body:'hello world', title:'Testing'},
      {userId: 2, id:2, body:'hello world', title:'Testing'}
    ];
    
    service.getPosts().subscribe(posts=>{
      expect(posts.length).toBe(2);
    });

    const req = httpMock.expectOne(`${service.URL}/posts`);
    expect(req.request.method).toBe('GET');

    req.flush(dummyPosts);

  })

  
});


























































































































// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// import { PostModel } from '../post.model';

// import { DataService } from './data.service';

// describe('DataService', () => {
//   let service: DataService;
//   let httpMock:HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientTestingModule],
//       providers:[DataService]
//     });
//     service = TestBed.inject(DataService);
//     httpMock =TestBed.inject(HttpTestingController)
//   });

//   afterEach(() =>{
//     httpMock.verify();
//   })

//   it('should retrieve posts from the API by GET',()=>{
//     const dummyPosts: PostModel[]=[
//       { userId:1, id : 1, body:'Hello World', title:'Testing Angular' },
//       { userId:2, id : 2, body:'Hello World', title:'Testing Angular' },

//     ];
//     service.getPosts().subscribe(posts=>{
//       expect(posts.length).toBe(2);

//     });
//     const req = httpMock.expectOne(`${service.URL}/posts`);
//     expect(req.request.method).toBe('GET');

//     req.flush(dummyPosts);
//   })
// });