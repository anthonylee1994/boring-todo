import React from "react";
import { Button } from "antd";
import { setLocale, getLocale, getAllLocales, FormattedMessage } from "umi";
import styles from "./index.less";

const LanguageToggleButton = () => {
  const currentLocale = getLocale();
  const locales = getAllLocales();

  const onToggleLocale = () => {
    setLocale(
      locales[(locales.indexOf(currentLocale) + 1) % locales.length],
      false,
    );
  };

  return (
    <Button
      onClick={onToggleLocale}
      size="large"
      className={styles.root}
      type="primary"
      shape="circle"
    >
      <FormattedMessage id="lang.code" />
    </Button>
  );
};

export default LanguageToggleButton;
