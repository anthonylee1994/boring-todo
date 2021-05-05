import styles from "./index.less";
import AppTitle from "@/components/common/AppTitle";
import Board from "@/components/todo/Board";
import useTodo from "@/hooks/useTodo";
import TodoContext from "@/contexts/TodoContext";
import BoardContext from "@/contexts/BoardContext";
import LanguageToggleButton from "@/components/common/LanguageToggleButton";
import AddCircleButton from "@/components/todo/AddCircleButton";

const IndexPage = () => {
  const todo = useTodo();

  return (
    <TodoContext.Provider value={todo}>
      <div className={styles.root}>
        <AppTitle />

        <div className={styles.container}>
          {todo.boards.map((board) => (
            <BoardContext.Provider key={board.uuid} value={board}>
              <Board />
            </BoardContext.Provider>
          ))}
        </div>

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
