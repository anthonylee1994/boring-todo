import { TodoHook } from "@/hooks/useTodo";
import { createContext } from "react";

const TodoContext = createContext<TodoHook>(null as any);

export default TodoContext;
