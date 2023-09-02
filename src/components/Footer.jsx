import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    {/* footer start */}
    <footer className="footer">
      <div className="footer__container">
        <Link to="social" className="footer__copyright">© Qudratulloh Uz | 2023</Link>
      </div>
    </footer>
    {/* footer end */}
    </>
  );
}
