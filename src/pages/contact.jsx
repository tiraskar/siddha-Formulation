// import React, { useState } from "react";
// import { MapPin, Clock, Mail, Phone } from "lucide-react";
// import ScrollUpButton from "../common/ScrollUpButton";
// import Captcha from "../components/Captcha.jsx"; // import your Captcha component
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     help: "",
//     address: "",
//     phone: "",
//     country: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form Data Captured:", formData);
//   //   alert("Form submitted! Check console for data.");
//   // };
//   const [isCaptchaValid, setIsCaptchaValid] = useState(false);
//   // Check if the mandatory fields are filled
//   const isFormReady =
//     formData.name.trim() !== "" &&
//     formData.email.trim() !== "" &&
//     formData.help.trim() !== "";
//   return (
//     <div className="bg-gray-100 min-h-screen p-6 font-serif">
//       <div className="max-w-6xl mx-auto space-y-10">
//         {/* ================= CONTACT FORM ================= */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <header className="px-6 py-4">
//             <p className="text-sm uppercase tracking-wider text-gray-700 font-medium">
//               Contact Us
//             </p>
//             <h1 className="text-3xl font-bold text-green-800 mt-1">
//               Reach Out Anytime
//             </h1>
//           </header>

//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Image */}
//             <div className="p-8 flex justify-center items-center">
//               <img
//                 src="/assets/img/herbal-medicine2020.png"
//                 alt="Ayurvedic ingredients"
//                 className="w-full h-full object-cover rounded-lg max-h-[400px]"
//               />
//             </div>

//             {/* Form */}
//             <div className="p-8">
//               <form
//                 action="https://formsubmit.co/rijalbishwash199@gmail.com"
//                 method="POST"
//                 className="space-y-4"
//               >
//                 {/* 1. CONFIGURATION: This removes the "Almost There" page */}
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_template" value="table" />
//                 <input
//                   type="hidden"
//                   name="_next"
//                   value={window.location.href}
//                 />

//                 {/* 2. SECURITY: The Secret Key (Put your actual Secret Key here) */}
//                 <input
//                   type="hidden"
//                   name="_reCAPTCHA_secret"
//                   value="6LcJazIsAAAAAOPzBy0TYNvgK_66KMTGH66TuYS8"
//                 />

//                 {/* 3. INPUT FIELDS (Dynamic Mapping) */}
//                 {["name", "email", "address", "phone", "country"].map(
//                   (field) => (
//                     <input
//                       key={field}
//                       type={
//                         field === "email"
//                           ? "email"
//                           : field === "phone"
//                           ? "tel"
//                           : "text"
//                       }
//                       name={field}
//                       placeholder={
//                         field.charAt(0).toUpperCase() +
//                         field.slice(1) +
//                         (field === "name" || field === "email" ? " *" : "")
//                       }
//                       value={formData[field]}
//                       onChange={handleChange}
//                       required={field === "name" || field === "email"}
//                       className="w-full px-3 py-2 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 text-lg"
//                     />
//                   )
//                 )}

//                 {/* 4. COMPULSORY MESSAGE SECTION */}
//                 <textarea
//                   name="help"
//                   rows="2"
//                   placeholder="How can we help? *"
//                   value={formData.help}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-1 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 text-lg resize-y"
//                 />

//                 {/* 5. DYNAMIC CAPTCHA: Visible only when mandatory fields are filled */}
//                 {isFormReady && (
//                   <div className="pt-4 transition-opacity duration-500 ease-in">
//                     <Captcha onValidChange={setIsCaptchaValid} />
//                   </div>
//                 )}

//                 {/* 6. SUBMIT BUTTON: Stays gray/inactive until Captcha is checked */}
//                 <button
//                   type="submit"
//                   disabled={!isCaptchaValid}
//                   className={`w-full px-4 py-3 rounded-md font-bold text-white text-xl tracking-wider transition-all
//             ${
//               isCaptchaValid
//                 ? "bg-[#006d2c] hover:bg-[#005a24] shadow-lg"
//                 : "bg-gray-400 cursor-not-allowed opacity-70"
//             }`}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         {/* ================= LOCATION + OFFICE HOURS ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Location Card */}
//           <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             <h2 className="text-3xl font-serif font-semibold text-green-900 flex items-center gap-3 mb-4">
//               <MapPin className="w-6 h-6 text-green-800" />
//               Siddha Formulation Location
//             </h2>

//             <p className="text-gray-700 mb-4">
//               All of our offices are open Sunday through Friday (except on major
//               holidays).
//             </p>

//             {/* <p className="text-gray-700 mb-4">
//       Want to grow with us? Visit our{" "}
//       <a
//         className="text-green-700 font-semibold underline hover:text-green-900"
//       >
//         Careers page
//       </a>.
//     </p> */}

//             <div className="space-y-3 text-gray-800">
//               <p className="flex items-center gap-2">
//                 <Mail className="w-5 h-5 text-green-700" />
//                 <span className="font-semibold">Email:</span>
//                 <a
//                   href="mailto:siddha.formulation@gmail.com"
//                   className="text-green-700 hover:text-green-900 "
//                 >
//                   siddha.formulation@gmail.com
//                 </a>
//               </p>

//               <p className="flex items-start gap-2">
//                 <Phone className="w-5 h-5 text-green-700 mt-1" />
//                 <span>
//                   <span className="font-semibold">Phone:</span>
//                   <br />
//                   External Relation / Marketing:{" "}
//                   <a
//                     href="tel:+9779857030665"
//                     className="text-green-700 hover:text-green-900  ml-1"
//                   >
//                     9857030665
//                   </a>
//                   <br />
//                   Admin:{" "}
//                   <a
//                     href="tel:+9779851214257"
//                     className="text-green-700 hover:text-green-900  ml-1"
//                   >
//                     9851214257
//                   </a>
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* Office Hours Card */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             <h2 className="text-3xl font-serif font-semibold text-green-900 flex items-center gap-3 mb-6">
//               <Clock className="w-6 h-6 text-green-800" />
//               Office Hours
//             </h2>

//             <div className="space-y-6 text-gray-800">
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Main Office</h3>
//                 <p className="text-sm flex items-center gap-2">
//                   <MapPin className="w-4 h-4 text-green-700" />
//                   Tilottama-15, Rupandehi, Nepal
//                 </p>
//                 <p className="text-sm flex items-center gap-2">
//                   <Clock className="w-4 h-4 text-green-700" />
//                   10:00 AM – 6:00 PM
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Factory Office</h3>
//                 <p className="text-sm flex items-center gap-2">
//                   <MapPin className="w-4 h-4 text-green-700" />
//                   Tilottama-15, Rupandehi, Nepal
//                 </p>
//                 <p className="text-sm flex items-center gap-2">
//                   <Clock className="w-4 h-4 text-green-700" />
//                   10:00 AM – 6:00 PM
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ScrollUpButton />
//     </div>
//   );
// };

// export default Contact;
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
import React, { useState, useRef } from "react";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import ScrollUpButton from "../common/ScrollUpButton";
import Captcha from "../components/Captcha.jsx";
import SuccessCard from "../components/SuccessCard.jsx";

const Contact = () => {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    help: "",
    address: "",
    phone: "",
    country: "",
  });

  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Controlled input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormReady =
    formData.name.trim() && formData.email.trim() && formData.help.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isCaptchaValid) return;

    const formPayload = new FormData();
    for (let key in formData) formPayload.append(key, formData[key]);
    formPayload.append("_captcha", "false");
    formPayload.append("_template", "table");
    formPayload.append("_subject", "New Contact Form Submission");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rijalbishwash199@gmail.com",
        { method: "POST", body: formPayload }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          help: "",
          address: "",
          phone: "",
          country: "",
        });
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setIsCaptchaValid(false);
        }
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-serif">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <header className="px-6 py-4">
            <p className="text-sm uppercase tracking-wider text-gray-700 font-medium">
              Contact Us
            </p>
            <h1 className="text-3xl font-bold text-green-800 mt-1">
              Reach Out Anytime
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="p-8 flex justify-center items-center">
              <img
                src="/assets/img/herbal-medicine2020.png"
                alt="Ayurvedic ingredients"
                className="w-full h-full object-cover rounded-lg max-h-[400px]"
              />
            </div>

            {/* Form */}
            <div className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Input fields */}
                  {["name", "email", "address", "phone", "country"].map(
                    (field) => (
                      <input
                        key={field}
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        name={field}
                        placeholder={
                          field.charAt(0).toUpperCase() +
                          field.slice(1) +
                          (field === "name" || field === "email" ? " *" : "")
                        }
                        value={formData[field] || ""}
                        onChange={handleChange}
                        required={field === "name" || field === "email"}
                        className="w-full px-3 py-2 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 text-lg"
                      />
                    )
                  )}

                  <textarea
                    name="help"
                    rows="2"
                    placeholder="How can we help? *"
                    value={formData.help || ""}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-900 text-lg resize-y"
                  />

                  {/* Show CAPTCHA only after mandatory fields filled */}
                  {isFormReady && !isSubmitted && (
                    <div className="pt-4">
                      <Captcha
                        ref={recaptchaRef}
                        onValidChange={setIsCaptchaValid}
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!isCaptchaValid}
                    className={`w-full px-4 py-3 rounded-md font-bold text-white text-xl tracking-wider transition-all ${
                      isCaptchaValid
                        ? "bg-[#006d2c] hover:bg-[#005a24] shadow-lg"
                        : "bg-gray-400 cursor-not-allowed opacity-70"
                    }`}
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <SuccessCard onOkClick={() => setIsSubmitted(false)} />
              )}
            </div>
          </div>
        </div>

        {/* Location & Office */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-green-900 flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-800" />
              Siddha Formulation Location
            </h2>
            <div className="space-y-3 text-gray-800">
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-700" />
                siddha.formulation@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-700" />
                9857030665
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-green-900 flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-green-800" />
              Office Hours
            </h2>
            <p className="text-sm text-gray-800">
              10:00 AM – 6:00 PM
              <br />
              Tilottama-15, Rupandehi, Nepal
            </p>
          </div>
        </div>
      </div>

      <ScrollUpButton />
    </div>
  );
};

export default Contact;
