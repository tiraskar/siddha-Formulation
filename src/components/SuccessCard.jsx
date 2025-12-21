import React from "react";

const SuccessCard = ({ onOkClick }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in duration-300">
      {/* Green Success Icon */}
      <div className="w-16 h-16 rounded-full border border-green-200 flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Success Text */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Success!</h2>
      <p className="text-gray-500 text-center mb-8">
        Your message has been sent successfully.
      </p>

      {/* Blue "OK" Button */}
      <button
        onClick={onOkClick}
        className="bg-[#7c7cf8] hover:bg-[#6b6bf0] text-white font-medium py-2 px-12 rounded shadow-sm transition-all active:scale-95"
      >
        OK
      </button>
    </div>
  );
};

export default SuccessCard;
