export interface BaseTask {
  title: string;
  summary: string;
  dueDate: string;
}

export interface Task extends BaseTask {
  id: string;
  userId: string;
}