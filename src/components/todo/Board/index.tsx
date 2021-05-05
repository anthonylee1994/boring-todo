import React, { useContext, useState } from "react";
import styles from "./index.less";
import { Card, Tooltip, Typography } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { FormattedMessage, useIntl } from "react-intl";
import TodoContext from "@/contexts/TodoContext";
import useDialog from "@/hooks/useDialog";
import EditBoardTitleModal from "@/components/modals/EditBoardTitleModal";
import DialogContext from "@/contexts/DialogContext";
import BoardContext from "@/contexts/BoardContext";
import Task from "../Task";
import useBoard from "@/hooks/useBoard";
import TaskContext from "@/contexts/TaskContext";
import classNames from "classnames";

const Board: React.FunctionComponent<any> = () => {
  const { formatMessage } = useIntl();
  const todo = useContext(TodoContext);
  const board = useContext(BoardContext);
  const { tasks, addTask, allTaskCompleted } = useBoard();
  const editDialog = useDialog();
  const [isDeleting, setDeleting] = useState(false);

  const onDelete = () => {
    setDeleting(true);
    setTimeout(() => {
      todo.deleteBoard(board.uuid);
    }, 300);
  };

  return (
    <Card
      title={
        <Typography.Title
          className={classNames(styles.title, {
            [styles.completed]: allTaskCompleted && tasks.length > 0,
          })}
          onClick={editDialog.open}
        >
          {board.title || formatMessage({ id: "new.task" })}
        </Typography.Title>
      }
      className={classNames(styles.root, {
        [styles.completed]: allTaskCompleted && tasks.length > 0,
        [styles.deleting]: isDeleting,
      })}
      actions={[
        <Tooltip key="up" title={formatMessage({ id: "move.up" })}>
          <UpOutlined onClick={() => todo.moveUp(board.uuid)} />
        </Tooltip>,
        <Tooltip key="down" title={formatMessage({ id: "move.down" })}>
          <DownOutlined onClick={() => todo.moveDown(board.uuid)} />
        </Tooltip>,
        <Tooltip key="add" title={formatMessage({ id: "add.task" })}>
          <PlusOutlined onClick={addTask} />
        </Tooltip>,
        <Tooltip key="edit" title={formatMessage({ id: "edit.board" })}>
          <EditOutlined onClick={editDialog.open} />
        </Tooltip>,
        <Tooltip key="delete" title={formatMessage({ id: "delete.board" })}>
          <DeleteOutlined onClick={onDelete} />
        </Tooltip>,
      ]}
    >
      {tasks.length === 0 ? (
        <Typography.Paragraph className={styles["no-task"]}>
          <FormattedMessage id="no.task" />
        </Typography.Paragraph>
      ) : (
        tasks.map((task) => (
          <TaskContext.Provider key={task.uuid} value={task}>
            <Task />
          </TaskContext.Provider>
        ))
      )}

      <DialogContext.Provider value={editDialog}>
        <EditBoardTitleModal key={board.uuid} />
      </DialogContext.Provider>
    </Card>
  );
};

export default Board;
