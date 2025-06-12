import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Siva Peddinti. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;