import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showAddTodo = false;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.uiService.onToggleAddTodo().subscribe((show) => {
      this.showAddTodo = show;
    });
  }

  handleAddTodo() {
    this.showAddTodo = !this.showAddTodo;
    this.uiService.toggleAddTodo(this.showAddTodo);
  }
}
