import React, { useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Button, Form, Input, Modal } from "antd";
import DialogContext from "@/contexts/DialogContext";
import TodoContext from "@/contexts/TodoContext";
import BoardContext from "@/contexts/BoardContext";

const EditBoardTitleModal = () => {
  const todo = useContext(TodoContext);
  const dialog = useContext(DialogContext);
  const board = useContext(BoardContext);
  const { formatMessage } = useIntl();

  const onFinish = (values: any) => {
    todo.updateBoard({
      ...board,
      ...values,
    });
    dialog.close();
  };

  return (
    <Modal
      centered
      title={formatMessage({ id: "edit.board" })}
      visible={dialog.visible}
      onCancel={dialog.close}
      footer={[
        <Button
          key="submit"
          form={`EditBoardTitleForm-${board.uuid}`}
          htmlType="submit"
        >
          <FormattedMessage id="update" />
        </Button>,
      ]}
    >
      <Form
        onFinish={onFinish}
        id={`EditBoardTitleForm-${board.uuid}`}
        initialValues={{ title: board.title }}
      >
        <Form.Item name="title">
          <Input placeholder={formatMessage({ id: "board.title" })} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditBoardTitleModal;
