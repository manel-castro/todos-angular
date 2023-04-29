import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosService } from 'src/app/services/todos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(
    private todosService: TodosService,
    private uiService: UiService
  ) {}

  handleDeleteTodo() {
    this.todosService.deleteTodo(this.todo);
  }

  handleUpdateTodo() {
    this.uiService.toggleUpdateTodo(this.todo);
  }
}
