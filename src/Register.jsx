import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    course: "",
    courseType: "",
    message: "",
  });

  // Course data
  const courseData = [
    {
      name: "BASICS Scratch",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      perSessionValueRaw: 99,
      fullCourseValueRaw: 249,
    },
    {
      name: "MIT App Inventor",
      perSession: "₹ 79",
      fullCourse: "₹ 199",
      perSessionValueRaw: 79,
      fullCourseValueRaw: 199,
    },
    {
      name: "Wix",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      perSessionValueRaw: 99,
      fullCourseValueRaw: 249,
    },
    {
      name: "HTML",
      perSession: "₹ 99",
      fullCourse: "₹ 249",
      perSessionValueRaw: 99,
      fullCourseValueRaw: 249,
    },
    {
      name: "Google Sites",
      perSession: "₹ 79",
      fullCourse: "₹ 199",
      perSessionValueRaw: 79,
      fullCourseValueRaw: 199,
    },
  ];

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Format the data in the expected structure
      const formattedData = {
        "Student Name": formData.studentName,
        "Parent Name": formData.parentName,
        Email: formData.email,
        Phone: formData.phone,
        School: formData.school,
        Grade: formData.grade,
        Course: formData.course,
        "Course Type": formData.courseType,
        Message: formData.message,
      };

      console.log("Submitting data to Google Script:", formattedData);
      console.log("Script URL:", import.meta.env.VITE_GOOGLE_SCRIPT_URL);

      // Submit the data to Google Apps Script
      const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
        mode: "no-cors", // Required for cross-origin requests to Google Apps Script
      });

      console.log("Form submitted with response type:", response.type);

      // With no-cors, we can't read the response, so we assume success if no error is thrown
      setFormStatus({ submitting: false, submitted: true, error: null });

      // Calculate the payment amount
      let amount = 0;
      const selectedCourse = courseData.find(
        (course) => course.name === formData.course
      );

      if (selectedCourse) {
        amount =
          formData.courseType === "Per Session"
            ? selectedCourse.perSessionValueRaw
            : selectedCourse.fullCourseValueRaw;
      }

      // Navigate to payment page after a brief delay
      setTimeout(() => {
        navigate("/payment", {
          state: {
            studentName: formData.studentName,
            course: formData.course,
            courseType: formData.courseType,
            amount: amount,
          },
        });
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to submit form. Please try again or contact support.",
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Student Registration
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          {formStatus.submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600">
                Thank you for registering. Redirecting to payment page...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="studentName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Student Name*
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Parent/Guardian Name*
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="school"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    School Name*
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="grade"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Grade Level*
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Grade</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>

              {/* Course Selection and Type Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="course"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Select Course*
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a Course</option>
                    {courseData.map((course, index) => (
                      <option key={index} value={course.name}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="courseType"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Course Type*
                  </label>
                  <select
                    id="courseType"
                    name="courseType"
                    value={formData.courseType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Type</option>
                    <option value="Per Session">Single Session</option>
                    <option value="Full Course">Full Course</option>
                  </select>
                </div>
              </div>

              {/* Price Display */}
              {formData.course && formData.courseType && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="text-green-700 font-medium">
                    Selected Course: {formData.course} - {formData.courseType}
                  </p>
                  <p className="text-green-700">
                    Price:{" "}
                    {formData.courseType === "Per Session"
                      ? courseData.find(
                          (course) => course.name === formData.course
                        )?.perSession
                      : courseData.find(
                          (course) => course.name === formData.course
                        )?.fullCourse}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Additional Comments
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p>{formStatus.error}</p>
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition ${
                    formStatus.submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus.submitting ? "Submitting..." : "Register Now"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Register;
