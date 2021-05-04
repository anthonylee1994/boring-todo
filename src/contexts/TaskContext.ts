import { TaskTypes } from "@/types/TaskTypes";
import { createContext } from "react";

const TaskContext = createContext<TaskTypes>(null as any);

export default TaskContext;
