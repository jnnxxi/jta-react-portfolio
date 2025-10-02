import React from "react";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center animate-fadeIn">
        <h3 className="text-2xl font-bold text-[#000009] mb-4">
          Currently Unavailable
        </h3>
        <p className="text-gray-600 mb-6">
          This project’s code and live demo are not yet available.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#0FF4C6] text-black font-semibold rounded-md hover:bg-[#DEFFF2] cursor-pointer transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;