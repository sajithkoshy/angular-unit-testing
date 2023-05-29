import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm: FormGroup;
  newTodo: FormControl;
  todos: any[] = [
    { title: 'Learn Angular', completed: false },
    { title: 'Build a springboot app', completed: false },
    { title: 'Learn microservices', completed: false }
  ];

  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.newTodo = new FormControl('');
    this.todoForm = this.formBuilder.group({
      newTodo: this.newTodo
    });
  }

  addTodo() {
    
    const todo = {
      title: this.newTodo.value,
      completed: false
    };
    this.todos.push(todo);
    this.newTodo.setValue('');
  }

  
toggleCompleted(todo: any) {
  todo.completed = !todo.completed;
}


  delete(todo: any) {
    this.todos = this.todos.filter(t => t !== todo);
  }
  
  logout() {
    
    this.router.navigateByUrl('/login');
  }
}
