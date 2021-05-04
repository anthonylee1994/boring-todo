import BoardContext from "@/contexts/BoardContext";
import TodoContext from "@/contexts/TodoContext";
import { TaskTypes } from "@/types/TaskTypes";
import { useContext } from "react";
import { useIntl } from "react-intl";
import { v4 as uuidv4 } from "uuid";

const useBoard = () => {
  const { formatMessage } = useIntl();
  const todo = useContext(TodoContext);
  const board = useContext(BoardContext);
  const tasks = board.tasks;

  const allTaskCompleted = tasks.every((task) => task.completed);

  const setTasks = (tasks: TaskTypes[]) => {
    todo.updateBoard({
      ...board,
      tasks,
    });
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        uuid: uuidv4(),
        title: formatMessage({ id: "new.task" }),
        completed: false,
      },
    ]);
  };

  const updateTask = (item: TaskTypes) => {
    const index = tasks.findIndex((task) => task.uuid === item.uuid);

    setTasks([...tasks.slice(0, index), item, ...tasks.slice(index + 1)]);
  };

  const deleteTask = (uuid: string) => {
    setTasks(tasks.filter((task) => task.uuid !== uuid));
  };

  const moveUp = (uuid: string) => {
    const index = tasks.findIndex((task) => task.uuid === uuid);

    if (index === 0) {
      return;
    }

    setTasks([
      ...tasks.slice(0, index - 1),
      tasks[index],
      tasks[index - 1],
      ...tasks.slice(index + 1),
    ]);
  };

  const moveDown = (uuid: string) => {
    const index = tasks.findIndex((task) => task.uuid === uuid);

    if (index === tasks.length - 1) {
      return;
    }

    setTasks([
      ...tasks.slice(0, index),
      tasks[index + 1],
      tasks[index],
      ...tasks.slice(index + 2),
    ]);
  };

  return {
    moveUp,
    moveDown,
    tasks,
    allTaskCompleted,
    addTask,
    updateTask,
    deleteTask,
  };
};

export default useBoard;
