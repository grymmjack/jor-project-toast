import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  // Auto-remove toasts after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        removeToast(toasts[0].id);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts, removeToast]);

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
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastElements}
    </ol>
  );
}

export default ToastShelf;
