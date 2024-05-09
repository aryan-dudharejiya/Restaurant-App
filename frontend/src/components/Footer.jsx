import React from 'react';

// Footer component
const Footer = () => {
  return (
    // Footer section
    <footer className="footer">
      <div className="container">
        {/* Footer text with dynamic year and attribution */}
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Take It Cheesy. All rights reserved. Created by Aryan Dudharejiya.
        </p>
        {/* Contact links */}
        <div className="contact-links">
          <a href="tel:+919773254534">+91 9773254534</a> {/* Telephone link */}
          <a href="mailto:aryand@example.com">work.aryandudharejiya@gmail.com</a> {/* Email link */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
