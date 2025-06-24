import { Component, computed, input, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { BaseTask, Task } from '../core/task.model';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, AddTaskDialogComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
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
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
  }

  onOpenAddTask() {
    this.showAddTaskDialog.set(true);
  }

  onCancelAddTask() {
    this.showAddTaskDialog.set(false);
  }

  onAddTask(task: BaseTask) {
    this.tasks.set([
      {
        id: new Date().getTime().toString(),
        userId: this.userId() ?? '0000000',
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate,
      },
      ...this.tasks(),
    ]);

    this.onCancelAddTask();
  }
}
