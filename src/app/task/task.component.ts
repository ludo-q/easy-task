import { Component, computed, input, signal } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  selectedUserTasks = computed(() =>
    this.taskService.tasks().filter((task) => task.userId === this.userId())
  );

  showAddTaskDialog = signal<boolean>(false);

  constructor(private taskService: TaskService) {}

  onOpenAddTask() {
    this.showAddTaskDialog.set(true);
  }

  onHideAddTask() {
    this.showAddTaskDialog.set(false);
  }
}
