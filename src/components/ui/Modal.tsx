import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  onClose,
  title,
}) => {
  const [animation, setAnimation] = useState("opacity-0 -translate-y-12");
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      setAnimation("opacity-100 translate-y-0");
      modalRef.current?.focus();
    } else {
      setAnimation("opacity-0 -translate-y-6");
    }
  }, [isVisible]);

  if (!isVisible && animation.includes("opacity-100")) {
    setTimeout(() => {
      return null;
    }, 500);
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-300 ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${animation}`}
      >
        <div className="shrink-0 p-4 text-blue-gray-900 antialiased font-sans text-2xl font-bold leading-snug flex items-center justify-between">
          <h3 className="mb-1">{title}</h3>

          <XMarkIcon
            className="h-8 w-8 rounded cursor-pointer p-1 hover:bg-gray-100 transition-colors"
            onClick={onClose}
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
