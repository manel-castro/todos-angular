import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private todosService: TodosService) {}

  handleDeleteTodo() {
    console.log('delete');
    this.todosService.deleteTodo(this.todo);
  }
}
