import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from 'src/app/Todo';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  /**
   * ADD TODO UI
   */
  subjectToggleAddTodo = new Subject<boolean>();
  showAddTodo = false;

  toggleAddTodo(show: boolean) {
    this.showAddTodo = show;
    return this.subjectToggleAddTodo.next(this.showAddTodo);
  }

  onToggleAddTodo(): Observable<boolean> {
    return this.subjectToggleAddTodo.asObservable();
  }

  /**
   * UPDATE TODO UI
   */
  subjectUpdateTodo = new Subject<Todo>();
  showUpdateTodo: Todo;

  toggleUpdateTodo(todo: Todo) {
    this.showUpdateTodo = todo;
    return this.subjectUpdateTodo.next(todo);
  }

  onToggleUdpateTodo(): Observable<Todo> {
    return this.subjectUpdateTodo.asObservable();
  }
}
