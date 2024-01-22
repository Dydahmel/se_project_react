import React from "react";
import "../ModalWithForm/ModalWithForm.css";

import { useEffect } from "react";

export const Modal = ({ name, onClose, modalContentClassName, children }) => {
  // here is `useEffect` for the `Escape` listener
  useEffect(() => {
    // we should define the handler inside `useEffect`, so that it wouldn’t lose the reference to be able to remove it
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // don’t forget to remove the listener in the `clean-up` function
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // here is the overlay handler
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // then we add the main wrapper with class `modal`
  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlay}>
      {/* the container for the contents */}
      <div className= {`modal__content ${modalContentClassName}` } >
        {/* add the close button */}        
        <button className="modal__close-btn" type="button" onClick={onClose} />
        {/* here will be anything you add as `children`*/}
        {children}
        
      </div>
    </div>
  );
};
