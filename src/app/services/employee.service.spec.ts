import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { EmployeeService } from './employee.service';
import { from } from 'rxjs';
import { PostModel } from '../post.model';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpClient Get Method', ()=>{
    const testPost: PostModel[]=[
      {id:1, userId:1, title:'title 1', body:'body1'},
      {id:2, userId:2, title:'title 2', body:'body2'},
    ];
    service.getListOfData().subscribe((posts)=>{
      expect(testPost).toBe(posts,'should check mocked data');
    });

    const req= httpMock.expectOne(service.jsonUrl+'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);
    httpMock.verify();
  });

  it('httpClient post method', () => {
    const testpost  : PostModel = 
      {id:1,userId:1,title:'title 1', body:'body1'};
     
    service.PostListOfData(testpost).subscribe((posts)=>{
      expect(testpost).toBe(testpost);
    });

    const req = httpMock.expectOne(service.jsonUrl+'posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost);
    httpMock.verify();
  });

  it('http client 404 error test case', ()=>{
    const errorMessage = 'mock 404 error occurred';
    service.getListOfData().subscribe((post)=>{
      fail('failing with error 404');
    },
    (error:HttpErrorResponse)=>{
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMessage)
    });
    
    const req = httpMock.expectOne(service.jsonUrl+'posts');

    req.flush(errorMessage,{status:404, statusText:'not Found'});
    httpMock.verify();
  })

});
