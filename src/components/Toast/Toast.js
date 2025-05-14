import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  message = "This is a toast message",
  variant = "notice",
  isVisible = true,
  setIsVisible,
}) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={`${styles.iconContainer}`}>
        {variant === "error" ? (
          <AlertOctagon size={24} />
        ) : variant === "warning" ? (
          <AlertTriangle size={24} />
        ) : variant === "success" ? (
          <CheckCircle size={24} />
        ) : (
          <Info size={24} />
        )}
        <VisuallyHidden>
          {variant === "error"
            ? "Error: "
            : variant === "warning"
            ? "Warning: "
            : variant === "success"
            ? "Success: "
            : "Info: "}
        </VisuallyHidden>
      </div>
      <p className={styles.content}>{message}</p>
      <button
        className={styles.closeButton}
        onClick={() => setIsVisible(false)}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
