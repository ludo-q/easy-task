import { Component, inject, input, output, signal } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-add-task-dialog',
  standalone: false,
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss',
})
export class AddTaskDialogComponent {
  hide = output<void>();
  userId = input.required<string>();
  private taskService = inject(TaskService);

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onHide() {
    this.hide.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId()
    );

    this.onHide();
  }
}
