import React from 'react';
import '../styles/footer.css';  // Adjusted path to go one level up and then to 'styles'


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jatin Panghal. All Rights Reserved.</p>
      <p>
        Made with ❤️ by <a href="https://jatinpanghal.com" target="_blank" rel="noopener noreferrer">Jatin Panghal</a>
      </p>
    </footer>
  );
};

export default Footer;
