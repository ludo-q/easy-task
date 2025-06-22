import { Component, computed, input, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { Task } from '../core/task.model';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  userId = input<string>(); 
  userName = input<string>();
  tasks: Task[] = DUMMY_TASKS;

  selectedUserTasks = computed<Task[]>(() => 
    this.tasks.filter((task) => task.userId === this.userId())
  );

}
