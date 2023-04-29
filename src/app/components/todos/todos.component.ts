import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  constructor(private todosService: TodosService) {}

  todos: Todo[] = [];

  ngOnInit() {
    this.todos = this.todosService.getTodos();

    this.todosService.onAddTodo().subscribe((todo) => {
      this.todos.push(todo);
    });

    this.todosService.onDeleteTodo().subscribe((todo) => {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
    });

    this.todosService.onUpdateTodo().subscribe((todo) => {
      this.todos = this.todos.map((item) =>
        item.id === todo.id ? todo : item
      );
    });
  }
}
