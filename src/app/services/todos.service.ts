import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../Todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  API_URL = 'http://localhost:5001/tasks';

  constructor(private httpClient: HttpClient) {}

  /**
   * CRUD:
   * - CREATE
   * - READ
   * - UPDATE
   * - DELETE
   */
  /**
   * READ
   */
  getTodos(): Todo[] {
    const todos = JSON.parse(window.localStorage.getItem('todos') || '{}');

    return todos;
  }

  getTodo(todo: Todo): Todo | undefined {
    const todos = this.getTodos();
    return todos.find((item) => item.id === todo.id);
  }

  /**
   * CREATE
   */

  subjectAddTodo = new Subject<Todo>();

  addTodo(todo: Todo): void {
    const todos = this.getTodos();

    todos.push(todo);

    window.localStorage.setItem('todos', JSON.stringify(todos));

    this.subjectAddTodo.next(todo);
  }

  onAddTodo(): Observable<Todo> {
    return this.subjectAddTodo.asObservable();
  }

  /**
   * UPDATE
   */
  updateTodo(todo: Todo): void {
    const todos = this.getTodos();

    const foundIndex = todos.findIndex((item) => item.id === todo.id);
    if (!foundIndex) {
      throw new Error('Unable to find todo');
    }

    todos.splice(foundIndex, 1, todo);

    window.localStorage.setItem('todos', JSON.stringify(todos));
  }

  /**
   * DELETE
   */
  subjectDeleteTodo = new Subject<Todo>();
  deleteTodo(todo: Todo): void {
    const todos = this.getTodos();

    const foundIndex = todos.findIndex((item) => item.id === todo.id);
    if (!foundIndex) {
      throw new Error('Unable to find todo');
    }

    todos.splice(foundIndex, 1);

    window.localStorage.setItem('todos', JSON.stringify(todos));

    this.subjectDeleteTodo.next(todo);
  }

  onDeleteTodo(): Observable<Todo> {
    return this.subjectDeleteTodo.asObservable();
  }
}
