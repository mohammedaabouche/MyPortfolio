import React from "react";

function Contact() {
  function sendEmail() {
    var email ="aabouche.mohammed@outlook.com"
    var subject = encodeURIComponent(document.getElementById("subject").value);
    var message = encodeURIComponent(document.getElementById("message").value);

    var mailtoLink =
      "mailto:" + email + "?subject=" + subject + "&body=" + message;
    window.location.href = mailtoLink;
  }
  return (
    <div >
        <h1 id="Contact Me">Contact Me</h1>
        <div className="grid grid-cols-1 contact-form">
        
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            required
          />
          <textarea
            id="message"
            placeholder="Message"
            required
          ></textarea>
          <button onClick={sendEmail}>Send</button>
          </div>

    </div>
  );
}
export default Contact;
