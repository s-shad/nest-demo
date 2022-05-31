/* eslint-disable prettier/prettier */
export interface Task {
  id: string;
  title: string;
  discrption:string
  status: TaskStatus;
}
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'INPROGRESS',
  DONE = 'DONE'
}
