import React from "react";
import styles from "../styles/Footer.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        {/* Kontakt links */}
        <div className={styles.colLeft}>
          <h3>CONTACT</h3>
          <p>
            Address: <br />
            <a
              href=""
              className={styles.addressLink}
              target="_blank"
              rel="noreferrer"
            >
              E.DIS AG <br />
              Langewahler Str. 60 <br />
              15517 Fürstenwalde
            </a>
          </p>

          <div className={styles.socialIcons}>
            <a href="mailto:hochschulkommunikation@th-wildau.de"><i className="bi bi-envelope-fill"></i></a>
            <a href="tel:+493375508300"><i className="bi bi-telephone-fill"></i></a>
            <a href="" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="" target="_blank" rel="noreferrer"><i className="bi bi-globe"></i></a>
            <a href="/about" target="_blank" rel="noreferrer"><i className="bi bi-info-circle-fill"></i></a>
          </div>
        </div>

        {/* Newsletter rechts */}
        <div className={styles.colRight}>
          <h3>NEWSLETTER</h3>
          <p>Subscribe to our newsletter to stay updated on the latest projects, research, and events.</p>
          <form>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Your email address"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <hr className={styles.footerHr} />

      <div className={styles.row}>
        <div className={styles.footerLinks}>
          <a href="/impressum">Legal notice</a>
          <a href="/datenschutz">Privacy</a>
        </div>
        <div className={styles.textEnd}>
          <p>This website serves Automation@edi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
