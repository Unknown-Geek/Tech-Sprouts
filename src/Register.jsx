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
    interests: [],
    course: "",
    courseType: "",
    message: "",
  });

  // Course data
  const courseData = [
    {
      name: "BASICS Scratch",
      perSession: "₹ 50",
      fullCourse: "₹ 120",
      perSessionValueRaw: 50,
      fullCourseValueRaw: 120,
    },
    {
      name: "MIT App Inventor",
      perSession: "₹ 50",
      fullCourse: "₹ 120",
      perSessionValueRaw: 50,
      fullCourseValueRaw: 120,
    },
    {
      name: "Wix",
      perSession: "₹ 50",
      fullCourse: "₹ 120",
      perSessionValueRaw: 50,
      fullCourseValueRaw: 120,
    },
    {
      name: "HTML",
      perSession: "₹ 40",
      fullCourse: "₹ 90",
      perSessionValueRaw: 40,
      fullCourseValueRaw: 90,
    },
    {
      name: "Google Sites",
      perSession: "₹ 40",
      fullCourse: "₹ 90",
      perSessionValueRaw: 40,
      fullCourseValueRaw: 90,
    },
  ];

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const interests = [...prev.interests];
        if (checked) {
          interests.push(value);
        } else {
          const index = interests.indexOf(value);
          if (index > -1) interests.splice(index, 1);
        }
        return { ...prev, interests };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    try {
      const formattedData = {
        "Student Name": formData.studentName,
        "Parent Name": formData.parentName,
        Email: formData.email,
        Phone: formData.phone,
        School: formData.school,
        Grade: formData.grade,
        Course: formData.course,
        "Course Type": formData.courseType,
        Interests: formData.interests.join(", "),
        Message: formData.message,
        Timestamp: new Date().toISOString(),
      };

      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      });

      setFormStatus({ submitting: false, submitted: true, error: null });

      // Calculate the amount based on course selection and type
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

      // Navigate to payment page with form data
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
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Failed to submit form. Please try again.",
      });
    }
  };

  const techInterests = [
    "Coding/Programming",
    "Game Development",
    "Robotics",
    "Web Design",
    "App Development",
    "Digital Art",
    "3D Printing",
  ];

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
                    <option value="K-2">K-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6-8">6-8</option>
                    <option value="9-12">9-12</option>
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
                <label className="block text-gray-700 font-medium mb-2">
                  Tech Interests (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {techInterests.map((interest) => (
                    <div key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        id={interest.replace(/\s+/g, "-").toLowerCase()}
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={interest.replace(/\s+/g, "-").toLowerCase()}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
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
