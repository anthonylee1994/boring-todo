import React, { useContext } from "react";
import styles from "./index.less";
import { useIntl } from "react-intl";
import { Card, Tooltip, Typography } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import useBoard from "@/hooks/useBoard";
import classNames from "classnames";
import TaskContext from "@/contexts/TaskContext";
import EditTaskTitleModal from "@/components/modals/EditTaskTitleModal";
import DialogContext from "@/contexts/DialogContext";
import useDialog from "@/hooks/useDialog";

const Task: React.FunctionComponent<any> = () => {
  const task = useContext(TaskContext);
  const { formatMessage } = useIntl();
  const { deleteTask, updateTask, moveUp, moveDown } = useBoard();
  const editDialog = useDialog();

  const onDelete = () => {
    deleteTask(task.uuid);
  };

  const onToggleComplete = () => {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  };

  return (
    <Card
      className={classNames(styles.root, {
        [styles.completed]: task.completed,
      })}
      actions={[
        <Tooltip key="up" title={formatMessage({ id: "move.up" })}>
          <UpOutlined onClick={() => moveUp(task.uuid)} />
        </Tooltip>,
        <Tooltip key="down" title={formatMessage({ id: "move.down" })}>
          <DownOutlined onClick={() => moveDown(task.uuid)} />
        </Tooltip>,
        <Tooltip key="check" title={formatMessage({ id: "mark.completed" })}>
          <CheckOutlined onClick={onToggleComplete} />
        </Tooltip>,
        <Tooltip key="edit" title={formatMessage({ id: "edit.task" })}>
          <EditOutlined onClick={editDialog.open} />
        </Tooltip>,
        <Tooltip key="delete" title={formatMessage({ id: "delete.task" })}>
          <DeleteOutlined onClick={onDelete} />
        </Tooltip>,
      ]}
    >
      <Typography.Paragraph
        className={classNames(styles["task-name"], {
          [styles.completed]: task.completed,
        })}
      >
        {task.title || formatMessage({ id: "new.task" })}
      </Typography.Paragraph>

      <DialogContext.Provider value={editDialog}>
        <EditTaskTitleModal key={task.uuid} />
      </DialogContext.Provider>
    </Card>
  );
};

export default Task;
