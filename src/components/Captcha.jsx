// import React, { useState } from "react";
// import { RotateCw } from "lucide-react";

// const Captcha = ({ onValidChange }) => {
//   // Use lazy initializers to set random numbers immediately on load
//   const [num1, setNum1] = useState(() => Math.floor(Math.random() * 50) + 1);
//   const [num2, setNum2] = useState(() => Math.floor(Math.random() * 10) + 1);
//   const [captchaValue, setCaptchaValue] = useState("");
//   const [showError, setShowError] = useState(false);

//   // Function for the refresh button
//   const generateCaptcha = () => {
//     setNum1(Math.floor(Math.random() * 50) + 1);
//     setNum2(Math.floor(Math.random() * 10) + 1);
//     setCaptchaValue("");
//     setShowError(false);
//     onValidChange(false); // Reset parent state
//   };

//   const handleCaptchaChange = (e) => {
//     const value = e.target.value;
//     setCaptchaValue(value);

//     const correctResult = num1 + num2;

//     if (parseInt(value) === correctResult) {
//       onValidChange(true);
//       setShowError(false);
//     } else {
//       onValidChange(false);
//       // Show error only if they've typed enough digits to possibly be the answer
//       if (value.length >= String(correctResult).length) {
//         setShowError(true);
//       } else {
//         setShowError(false);
//       }
//     }
//   };

//   return (
//     <div className="w-full space-y-2">
//       <div className="flex items-center justify-between bg-green-50/5  border border-green-500 p-2 rounded-md pl-5 pr-10 shadow-sm">
//         <div className="flex items-center gap-5">
//           <span className="text-xl font-semibold  text-gray-800 tracking-widest">
//             {num1} + {num2} =
//           </span>

//           <input
//             type="number"
//             value={captchaValue}
//             onChange={handleCaptchaChange}
//             placeholder="?"
//             className={`w-28 h-10 border-2 rounded-lg text-center text-xl font-semibold focus:outline-none bg-white transition-all ${
//               showError
//                 ? "border-red-500 bg-red-50 text-red-600"
//                 : "border-green-500 focus:border-green-600"
//             }`}
//           />
//         </div>

//         <button
//           type="button"
//           onClick={generateCaptcha}
//           className="text-green-600 hover:text-green-700 transition-transform active:scale-90 duration-200"
//           title="Refresh numbers"
//         >
//           <RotateCw size={28} strokeWidth={2.5} />
//         </button>
//       </div>

//       <div className="h-5 px-1">
//         {showError && (
//           <p className="text-red-600 text-sm font-semibold">
//             Incorrect captcha. Please try again.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Captcha;

// import React, { forwardRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

// const Captcha = forwardRef(({ onValidChange }, ref) => {
//   const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

//   const handleVerify = (token) => {
//     onValidChange(!!token);
//   };

//   if (!siteKey) return null;

//   return (
//     // <div className="w-full flex justify-start py-2">
//     //   <div style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}>
//     //     <ReCAPTCHA
//     //       ref={ref} // Pass the ref here
//     //       sitekey={siteKey}
//     //       onChange={handleVerify}
//     //     />
//     //   </div>
//     // </div>
//     <div className="w-full flex justify-start py-2 overflow-visible">
//       <div
//         style={{
//           transform: "scale(0.85)",
//           transformOrigin: "left top", // Keeps it pinned to the top-left
//           width: "max-content", // Ensures the container doesn't shrink smaller than the widget
//         }}
//       >
//         <ReCAPTCHA ref={ref} sitekey={siteKey} onChange={handleVerify} />
//       </div>
//     </div>
//   );
// });

// export default Captcha;

import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = forwardRef(({ onValidChange }, ref) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) return null;

  return (
    <div className="w-full flex justify-start py-2 overflow-visible">
      {/* A scale of 0.85 reduces the popup card to a compact size.
          transformOrigin: "left top" keeps the card from drifting.
      */}
      <div
        style={{
          transform: "scale(0.85)",
          transformOrigin: "left top",
          width: "max-content",
        }}
      >
        <ReCAPTCHA
          ref={ref}
          sitekey={siteKey}
          onChange={(token) => onValidChange(!!token)}
          onExpired={() => onValidChange(false)}
        />
      </div>
    </div>
  );
});

export default Captcha;
