import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  // Form validation function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_x552psm",
        "template_0k79era",
        formRef.current,
        "6HsKRrdixTzXsJlg4"
      )
      .then(() => {
        setMessageStatus("Message delivered successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch(() => setMessageStatus("Failed to send message. Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-gray-900 relative">
      {/* Title */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wide">
          Want to get in Touch?
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#695aa6] mb-8"
          style={{ fontFamily: '"Indie Flower", cursive' }}
        >
          Contact Me
        </h2>
      </motion.div>

      {/* Contact Details */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Left: Info */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">My Address</h3>
          <p className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-[#695aa6] text-xl" />
            Kutagulla, Kadiri, Andhra Pradesh, India.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Social Profiles</h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/arjun-kanth-venkatagiri-7aba47241/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#0077b5] text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://github.com/arjunv2003" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black text-2xl hover:scale-110 transition" />
            </a>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Email</h3>
          <p className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-[#695aa6] text-xl" />
            arjunkanthvenkatagiri@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-[#695aa6] text-xl" />
            20cs01065@iitbbs.ac.in
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Phone</h3>
          <p className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-[#695aa6] text-xl" />
            +91 9493187113
          </p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Your Name</label>
            <input 
              type="text" 
              name="user_name" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-md border border-[#695aa6] focus:outline-none focus:ring-2 focus:ring-[#695aa6]" 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Your Email</label>
            <input 
              type="email" 
              name="user_email" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-md border border-[#695aa6] focus:outline-none focus:ring-2 focus:ring-[#695aa6]" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Your Message</label>
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-md border border-[#695aa6] focus:outline-none focus:ring-2 focus:ring-[#695aa6]" 
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className={`w-full py-3 rounded-md transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-white hover:bg-[#695aa6] border border-[#695aa6] text-[#695aa6] hover:text-white font-bold"}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {messageStatus && <p className="text-center text-sm text-green-600 mt-4">{messageStatus}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
