import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Charles Hunter. All rights reserved.</p>
      <p>
        <a href="https://github.com/C-Hunter77" target="_blank" rel="noopener noreferrer">
          GitHub Profile - CLICK HERE
        </a>
        {/* | 
        <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a> */}
      </p>
    </footer>
  );
}

export default Footer;
