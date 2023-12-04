"use client";

import React, { ReactNode, MouseEvent } from "react";
import Image from "next/image";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="modal-content m-8 p-2 bg-white items-center text-center text-black rounded">
        <span className="close" onClick={onClose}>
          <Image
            src="/close-button.svg"
            alt="close-button"
            width={25}
            height={25}
          />
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
