import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Payment.css";

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
      <div className="payment-hero">
        <div className="payment-shape payment-shape-1"></div>
        <div className="payment-shape payment-shape-2"></div>
        <div className="payment-shape payment-shape-3"></div>

        <div className="payment-content">
          <div className="missing-info">
            <h2>Missing Registration Information</h2>
            <p>
              Please complete the registration form before proceeding to
              payment.
            </p>
            <button
              onClick={() => navigate("/register")}
              className="missing-info-btn"
            >
              Back to Registration
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="payment-hero">
      {/* Floating shapes */}
      <div className="payment-shape payment-shape-1"></div>
      <div className="payment-shape payment-shape-2"></div>
      <div className="payment-shape payment-shape-3"></div>

      <div className="payment-content">
        <h1 className="payment-title">Complete Your Payment</h1>
        <p className="payment-subtitle">
          You're just one step away from starting your tech journey!
        </p>

        <div className="payment-card">
          {/* Student and Course Details */}
          <div className="registration-details">
            <h2 className="mt-8 md:mt-4">Registration Details</h2>
            <div className="details-grid mt-12 md:mt-12">
              <div className="detail-item">
                <div className="detail-label">Student Name</div>
                <div className="detail-value">{studentName}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Course</div>
                <div className="detail-value">{course}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Type</div>
                <div className="detail-value">{courseType}</div>
              </div>{" "}
              <div className="detail-item detail-item-amount">
                <div className="detail-label">Amount</div>
                <div className="detail-value detail-amount">₹ {amount}</div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="payment-method mt-12">
            <h3>Payment Method</h3>
            <p className="payment-description">
              Secure payments powered by Razorpay. You'll be redirected to
              complete your payment safely and securely.
            </p>
        
            <div className="razorpay-section">
              <h4 className="razorpay-title">
                Click the button below to proceed with payment
              </h4>

              {/* Course and type specific Razorpay button container */}
              <div className="razorpay-container">
                <div ref={paymentContainerRef}></div>
              </div>

              <p className="razorpay-disclaimer">
                By proceeding, you agree to our terms and payment policies.
              </p>
            </div>

            <div className="payment-info-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="payment-info-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="payment-info-text">
                You will receive a receipt via email after successful payment.
              </span>
            </div>
          </div>
        </div>

        {/* Course-specific fallback information - Collapsible */}
        <div className="help-section">
          <button
            onClick={() => setIsHelpExpanded(!isHelpExpanded)}
            className="help-toggle"
          >
            <span>Having Trouble with Payment?</span>
            <svg
              className={`help-icon ${isHelpExpanded ? "expanded" : ""}`}
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
            className={`help-content ${
              isHelpExpanded ? "expanded" : "collapsed"
            }`}
          >
            <div className="help-inner">
              <p className="help-description">
                If you're experiencing any issues with the payment process,
                please contact us:
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <strong>Email:</strong> techsproutsorg@gmail.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +91 7025535227
                </div>
                <p className="contact-note">
                  Please mention your selected course ({course} - {courseType})
                  in your communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          onClick={() => navigate("/register")}
          className="back-button"
          href="#"
        >
          ← Back to Registration
        </a>
      </div>
    </div>
  );
}

export default Payment;
