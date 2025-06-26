import { Component, inject, input } from '@angular/core';
import { Task } from '../../core/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  task = input.required<Task>()
  taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task().id)
  }
}
