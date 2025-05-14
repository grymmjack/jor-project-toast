import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  if (!toasts || toasts.length === 0) {
    return null;
  }
  const toastElements = toasts.map((toast) => (
    <li key={toast.id} className={styles.toastWrapper}>
      <Toast variant={toast.variant}>{toast.message}</Toast>
    </li>
  ));
  return <ol className={styles.wrapper}>{toastElements}</ol>;
}

export default ToastShelf;
