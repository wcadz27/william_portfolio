import React, { useState, useRef } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="app__contact-container app__flex">
      <div className="app__flex app__contact">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 4 }}
          className="app__flex app__contact-header"
        >
          <h1 className="app__contact-heading header-highlight">Contact</h1>
          <p className="p-text">
            Want to have a conversation or work together? Leave your details and
            I'll get back to you as soon as I can.
          </p>
        </motion.div>
        {!isFormSubmitted ? (
          <motion.div className="app__contact-form-container app__flex">
            <form className="app__flex" onSubmit={sendEmail}>
              <div className="input-container">
                <input
                  className="p-text sender-name"
                  type="text"
                  placeholder="Name"
                  name="senderName"
                />
                <input
                  className="p-text sender-email"
                  type="text"
                  placeholder="Email"
                  name="senderEmail"
                />
                <input
                  className="p-text sender-message"
                  placeholder="Message"
                  name="message"
                />
                <button
                  className="contact-button p-text"
                  type="submit"
                  value="Send"
                >
                  {!loading ? "Send" : "Sending..."}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <div>
            <h3 className="email-sent-message p-text">
              Thank you for getting in touch! I'll get back to you as soon as I
              can.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
