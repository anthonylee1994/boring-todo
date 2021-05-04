import React from "react";
import styles from "./index.less";
import AppTitle from "@/components/common/AppTitle";
import AddCircleButton from "@/components/todo/AddCircleButton";
import Board from "@/components/todo/Board";
import Task from "@/components/todo/Task";
import useTodo from "@/hooks/useTodo";
import TodoContext from "@/contexts/TodoContext";
import BoardContext from "@/contexts/BoardContext";
import LanguageToggleButton from "@/components/common/LanguageToggleButton";

const IndexPage = () => {
  const todo = useTodo();

  return (
    <TodoContext.Provider value={todo}>
      <div className={styles.root}>
        <AppTitle />

        {todo.boards.map((board) => (
          <BoardContext.Provider key={board.uuid} value={board}>
            <Board />
          </BoardContext.Provider>
        ))}

        <AddCircleButton
          onClick={todo.addBoard}
          className={styles["add-button"]}
        />

        <LanguageToggleButton />
      </div>
    </TodoContext.Provider>
  );
};

export default IndexPage;
