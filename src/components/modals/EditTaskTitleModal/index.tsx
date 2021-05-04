import React, { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Button, Form, Input, Modal } from "antd";
import DialogContext from "@/contexts/DialogContext";
import useBoard from "@/hooks/useBoard";
import TaskContext from "@/contexts/TaskContext";

const EditTaskTitleModal = () => {
  const task = useContext(TaskContext);
  const dialog = useContext(DialogContext);
  const { updateTask } = useBoard();
  const { formatMessage } = useIntl();

  const onFinish = (values: any) => {
    updateTask({
      ...task,
      ...values,
    });
    dialog.close();
  };

  return (
    <Modal
      centered
      title={formatMessage({ id: "edit.task" })}
      visible={dialog.visible}
      onCancel={dialog.close}
      footer={[
        <Button
          key="submit"
          form={`EditTaskTitleForm-${task.uuid}`}
          htmlType="submit"
        >
          <FormattedMessage id="update" />
        </Button>,
      ]}
    >
      <Form
        id={`EditTaskTitleForm-${task.uuid}`}
        onFinish={onFinish}
        initialValues={{ title: task.title }}
      >
        <Form.Item name="title">
          <Input placeholder={formatMessage({ id: "task.title" })} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTaskTitleModal;
