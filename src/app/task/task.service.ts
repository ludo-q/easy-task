import { Injectable, signal } from '@angular/core';
import { BaseTask, Task } from '../core/task.model';
import { DUMMY_TASKS } from './dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<Task[]>(DUMMY_TASKS);

  readonly tasks = this._tasks.asReadonly();

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
      this._tasks.set(JSON.parse(tasks));
    }
  }

  addTask(taskData: BaseTask, userId: string) {
    this._tasks.set([
      {
        id: new Date().getTime().toString(),
        userId: userId ?? '0000000',
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      },
      ...this._tasks(),
    ]);
    this.saveTasks();
  }

  removeTask(id: string) {
    this._tasks.set(this._tasks().filter((task) => task.id !== id));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this._tasks()));
  }
}
