import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodosService } from 'src/app/services/todos.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  showAddTodo = false;
  title = '';

  constructor(
    private uiService: UiService,
    private todoService: TodosService
  ) {}

  ngOnInit() {
    this.uiService.onToggleAddTodo().subscribe((show) => {
      this.showAddTodo = show;
    });
  }
  onSubmit(event: any) {
    event.preventDefault();
    //@ts-ignore
    console.log('formSubmit,', Array.from(new FormData(event.target)));

    const newTodo: Todo = {
      text: this.title,
      day: Date.now(),
      reminder: true,
      id: Date.now(),
    };
    this.title = '';

    this.todoService.addTodo(newTodo);
  }
}
