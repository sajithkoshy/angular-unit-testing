// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { StudentComponent } from './student.component';
// import { StudentService } from '../services/student.service';
// import { inject, Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';


// class MockStudentService extends StudentService
// {
//   // public NewSaveMethod()
//   // {
//   //   return true;
//   // }
// }
// describe('StudentComponent', () => {
//   let component: StudentComponent;
//   let fixture: ComponentFixture<StudentComponent>;
//   let service: StudentService

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ StudentComponent ],
//       imports:[HttpClientModule]
//     })
//     .compileComponents();
//     TestBed.overrideComponent
//     (
//       StudentComponent,
//       {set: {providers:[{provide:StudentService,useClass:MockStudentService}]}}
//     )

//     fixture = TestBed.createComponent(StudentComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     service = TestBed.inject(StudentService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('DI unit test case using testbed get method',() =>{
//     expect(service instanceof(StudentService)).toBeTruthy();
    
//   })
//   it('DI unit test case with override',()=>{
//     let element = fixture.debugElement.injector.get(StudentService);
//     expect(element instanceof(MockStudentService)).toBeTruthy();
//   })

// })
