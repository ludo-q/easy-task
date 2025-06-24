import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseTask } from '../../core/task.model';
@Component({
  selector: 'app-add-task-dialog',
  imports: [FormsModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss'
})
export class AddTaskDialogComponent {
  cancel = output<void>();
  add = output<BaseTask>();
  
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    });
  }
}
