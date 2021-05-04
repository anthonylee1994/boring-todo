import React from "react";
import { Button, ButtonProps, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useIntl } from "react-intl";

const AddCircleButton: React.FunctionComponent<ButtonProps> = (props) => {
  const { formatMessage } = useIntl();

  return (
    <Tooltip title={formatMessage({ id: "add.board" })}>
      <Button
        size="large"
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        {...props}
      />
    </Tooltip>
  );
};

export default AddCircleButton;
