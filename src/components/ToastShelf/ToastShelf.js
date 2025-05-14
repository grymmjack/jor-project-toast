import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  if (!toasts || toasts.length === 0) {
    return null;
  }

  const toastElements = toasts.map((toast) => (
    <li key={toast.id} className={styles.toastWrapper}>
      <Toast variant={toast.variant} id={toast.id} removeToast={removeToast}>
        {toast.message}
      </Toast>
    </li>
  ));
  return <ol className={styles.wrapper}>{toastElements}</ol>;
}

export default ToastShelf;
