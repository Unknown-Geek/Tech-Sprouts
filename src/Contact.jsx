import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6 card-animate">
        Contact Us
      </h1>
      <p className="text-gray-700 mb-4 card-animate">
        Have questions? Reach out to us using the information below or fill out
        the contact form.
      </p>
      <ul className="mb-4 text-gray-600 card-animate">
        <li>Email: techsproutsorg@gmail.com</li>
        <li>Phone: +91 7025535227</li>
        <li>Address: College of Engineering Trivandrum, Sreekaryam</li>
      </ul>
      <div className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md mt-8 card-animate">
        <form
          action="https://formspree.io/f/xblgbqdy"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
