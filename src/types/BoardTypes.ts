import { TaskTypes } from "./TaskTypes";

export interface BoardTypes {
  uuid: string;
  title?: string;
  tasks: TaskTypes[];
}
