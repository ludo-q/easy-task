import { Component, computed, input, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { Task } from '../core/task.model';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, AddTaskDialogComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  userId = input<string>(); 
  userName = input<string>();
  tasks = signal<Task[]>(DUMMY_TASKS);
  showAddTaskDialog = signal<boolean>(false);

  selectedUserTasks = computed<Task[]>(() => 
    this.tasks().filter((task) => task.userId === this.userId())
  );

  onCompleteTask(id: string) {
    this.tasks.set(
      this.tasks().filter((task) => task.id !== id)
    )
  }

  onAddTask() {
    this.showAddTaskDialog.set(true);
  }

}
