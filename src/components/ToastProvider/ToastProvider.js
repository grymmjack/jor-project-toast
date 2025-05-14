import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
export const ToastContext = React.createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    clearToasts();
  });

  const addToast = React.useCallback((message, variant) => {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        clearToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
