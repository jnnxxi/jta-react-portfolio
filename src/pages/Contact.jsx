import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModalMessage("✅ Message sent successfully!");
          setShowModal(true);
          form.current.reset();
        },
        () => {
          setModalMessage("❌ Failed to send. Please try again later.");
          setShowModal(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-br from-[#464F51] via-[#000009] to-[#464F51] text-white py-16 px-6 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0FF4C6]/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#DEFFF2]/10 rounded-full mix-blend-screen filter blur-2xl animate-[float_8s_ease-in-out_infinite]"></div>

      <div className="relative max-w-[900px] mx-auto text-center z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0FF4C6] animate-fadeIn">
          Contact Me
        </h2>
        <p className="text-gray-200 mt-4 animate-fadeIn delay-200">
          Have a question or want to work together? Drop me a message below.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-12 grid gap-6 animate-fadeIn delay-500"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 rounded-md bg-[#000009]/80 text-white border border-[#0FF4C6]/40 focus:outline-none focus:ring-2 focus:ring-[#0FF4C6] transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-md bg-[#000009]/80 text-white border border-[#0FF4C6]/40 focus:outline-none focus:ring-2 focus:ring-[#0FF4C6] transition"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-4 rounded-md bg-[#000009]/80 text-white border border-[#0FF4C6]/40 focus:outline-none focus:ring-2 focus:ring-[#0FF4C6] transition"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-md bg-[#000009]/80 text-white border border-[#0FF4C6]/40 focus:outline-none focus:ring-2 focus:ring-[#0FF4C6] transition"
            required
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 bg-[#0FF4C6] text-black font-semibold rounded-md hover:bg-[#DEFFF2] hover:scale-101 transform transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-sm text-center">
            <p className="mb-4">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#0FF4C6] text-black font-semibold rounded hover:bg-[#DEFFF2] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
