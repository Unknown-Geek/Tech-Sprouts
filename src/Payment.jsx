import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { studentName, course, courseType, amount } = location.state || {};
  const paymentContainerRef = useRef(null);
  const [isHelpExpanded, setIsHelpExpanded] = useState(false);

  // Get the appropriate payment button ID based on course and type
  const getPaymentButtonId = (course, type) => {
    // Map of course+type combinations to their specific Razorpay button IDs
    const buttonIds = {
      "BASICS Scratch": {
        "Per Session": "pl_QRJ9E0i7MAVHio", // 99 rupees
        "Full Course": "pl_QRJFa1EL2YJ1DC", // 249 rupees
      },
      "MIT App Inventor": {
        "Per Session": "pl_QRJJcSBctlurg9", // 79 rupees
        "Full Course": "pl_QRJPh4EYEXRdYu", // 199 rupees
      },
      Wix: {
        "Per Session": "pl_QRJ9E0i7MAVHio", // 99 rupees
        "Full Course": "pl_QRJFa1EL2YJ1DC", // 249 rupees
      },
      HTML: {
        "Per Session": "pl_QRJ9E0i7MAVHio", // 99 rupees
        "Full Course": "pl_QRJFa1EL2YJ1DC", // 249 rupees
      },
      "Google Sites": {
        "Per Session": "pl_QRJJcSBctlurg9", // 79 rupees
        "Full Course": "pl_QRJPh4EYEXRdYu", // 199 rupees
      },
      Canva: {
        "Per Session": "pl_QRJ9E0i7MAVHio", // 99 rupees
        "Full Course": "pl_QRJFa1EL2YJ1DC", // 249 rupees
      },
    };

    // Return the specific button ID or the default one
    return buttonIds[course]?.[type] || "pl_QRJJcSBctlurg9";
  };

  // Load Razorpay script and handle payment buttons
  useEffect(() => {
    if (!paymentContainerRef.current || !studentName) return;

    // Get the appropriate button ID for this course+type combination
    const buttonId = getPaymentButtonId(course, courseType);

    // Create a form element
    const form = document.createElement("form");

    // Create the script element for Razorpay
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", buttonId);
    script.async = true;

    // Append the script to the form
    form.appendChild(script);

    // Clear the container and append the form
    if (paymentContainerRef.current) {
      paymentContainerRef.current.innerHTML = "";
      paymentContainerRef.current.appendChild(form);
    }

    // Cleanup function
    return () => {
      if (paymentContainerRef.current) {
        paymentContainerRef.current.innerHTML = "";
      }
    };
  }, [studentName, course, courseType]);

  // If no data was passed, redirect back to registration
  if (!studentName || !course || !courseType) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            Missing Registration Information
          </h2>
          <p className="text-gray-700 mb-6">
            Please complete the registration form before proceeding to payment.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Back to Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Complete Your Payment
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Student and Course Details */}
          <div className="bg-green-50 p-6 border-b border-green-100">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Registration Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Student Name</p>
                <p className="font-medium">{studentName}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Course</p>
                <p className="font-medium">{course}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Type</p>
                <p className="font-medium">{courseType}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Amount</p>
                <p className="font-bold text-lg text-green-700">₹ {amount}</p>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              <p className="text-gray-600 mb-4">
                Secure payments powered by Razorpay. You'll be redirected to
                complete your payment.
              </p>

              <div className="bg-blue-50 p-4 rounded-md mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-700">
                  You will receive a receipt via email after successful payment.
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Razorpay Payment Button Container */}
              <div className="w-full md:w-auto bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                <h4 className="text-center font-semibold mb-4 text-gray-700">
                  Click the button below to proceed with payment
                </h4>

                {/* Course and type specific Razorpay button container */}
                <div className="razorpay-container flex justify-center mb-4">
                  <div ref={paymentContainerRef}></div>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By proceeding, you agree to our terms and payment policies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course-specific fallback information - Collapsible */}
        <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <button
            onClick={() => setIsHelpExpanded(!isHelpExpanded)}
            className="w-full flex items-center justify-between p-4 text-left font-semibold text-lg text-gray-700"
          >
            <span>Having Trouble with Payment?</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                isHelpExpanded ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {/* Collapsible content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isHelpExpanded
                ? "max-h-96 opacity-100 py-2"
                : "max-h-0 opacity-0 py-0"
            }`}
          >
            <div className="p-6 border-t border-gray-100">
              <p className="text-gray-600 mb-6 text-center">
                If you're experiencing any issues with the payment process,
                please contact us:
              </p>

              <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-gray-800">
                  <strong>Email:</strong> techsproutsorg@gmail.com
                </p>
                <p className="text-gray-800">
                  <strong>Phone:</strong> +91 7025535227
                </p>
                <p className="text-sm text-gray-600 max-w-md text-center mt-2">
                  Please mention your selected course ({course} - {courseType})
                  in your communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/register")}
            className="text-gray-600 hover:text-green-600 transition"
          >
            ← Back to Registration
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
