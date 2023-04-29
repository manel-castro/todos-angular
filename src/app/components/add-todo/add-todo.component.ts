import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  showAddTodo = false;
  title = '';

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.onToggleAddTodo().subscribe((show) => {
      this.showAddTodo = show;
    });
  }
  onSubmit(event: any) {
    event.preventDefault();
    console.log('formSubmit,', event);
  }
}
