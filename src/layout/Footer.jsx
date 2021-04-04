import React from 'react';

export const Footer = () => {
    return(
      <footer className="main-footer">
        <div className="copyright">
            © {new Date().getFullYear()} For Portfolio
        </div>
      </footer>
    );
};