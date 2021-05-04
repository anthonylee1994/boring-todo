import React from "react";
import styles from "./index.less";
import { Typography } from "antd";
import { FormattedMessage } from "@/.umi/plugin-locale/localeExports";

const AppTitle = () => {
  return (
    <Typography.Title className={styles.root}>
      <FormattedMessage id="app.title" />
    </Typography.Title>
  );
};

export default AppTitle;
