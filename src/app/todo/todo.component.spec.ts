import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodoComponent } from './todo.component';
import { Router, RouterModule } from '@angular/router';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let router : Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, FormsModule, RouterModule.forRoot([])],
      declarations: [TodoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    const input = fixture.debugElement.query(By.css('.addProperty')).nativeElement;
    const button = fixture.debugElement.query(By.css('.addButton')).nativeElement;
    input.value = 'New todo data';
    input.dispatchEvent(new Event('input'));
    button.click();
    fixture.detectChanges();
    expect(component.todos.length).toBe(4);
    expect(component.todos[3].title).toEqual('New todo data');
  });


  it('should delete a todo', () => {
    const deleteButton = fixture.debugElement.query(By.css('.deleteProperty')).nativeElement;
    deleteButton.click();
    fixture.detectChanges();
    expect(component.todos.length).toBe(2);
  });

  it('should navigate to the login page', () => {
    spyOn(router, 'navigateByUrl');
  
    component.logout();
  
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
  
});

