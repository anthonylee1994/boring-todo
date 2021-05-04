import { useState } from "react";

export interface DialogHook {
  visible: boolean;
  open: () => void;
  close: () => void;
}

const useDialog = (): DialogHook => {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return {
    visible,
    open,
    close,
  };
};

export default useDialog;
