import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-primary text-white py-4">
        <div className="container text-center">
          <p className="mb-3">Connect with us</p>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-white fs-4"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              className="text-white fs-4"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-white fs-4"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="mt-3 mb-0">&copy; 2025 RS Builder</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
