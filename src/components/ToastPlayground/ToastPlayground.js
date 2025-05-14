import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastProvider, ToastContext } from "../ToastProvider";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

// Create a new component that will be inside the provider
function ToastForm() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const { addToast } = React.useContext(ToastContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (message && variant && addToast) {
          addToast(message, variant);
          setMessage("");
          setVariant("");
        }
      }}
    >
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastProvider>
        <ToastShelf />
        <ToastForm />
      </ToastProvider>
    </div>
  );
}

export default ToastPlayground;
