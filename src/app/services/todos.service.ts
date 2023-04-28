import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  addTodo(todo: Todo): void {
    const todos = this.getTodos();

    todos.push(todo);

    window.localStorage.setItem('todos', JSON.stringify(todos));
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
  deleteTodo(todo: Todo): void {
    const todos = this.getTodos();

    const foundIndex = todos.findIndex((item) => item.id === todo.id);
    if (!foundIndex) {
      throw new Error('Unable to find todo');
    }

    todos.splice(foundIndex, 1);

    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
}
