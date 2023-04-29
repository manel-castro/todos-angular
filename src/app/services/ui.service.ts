import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

  toggleAddTodo() {
    this.showAddTodo = !this.showAddTodo;
    return this.subjectToggleAddTodo.next(this.showAddTodo);
  }

  onToggleAddTodo(): Observable<boolean> {
    return this.subjectToggleAddTodo.asObservable();
  }
}
