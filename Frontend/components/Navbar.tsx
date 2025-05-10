"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';




type UserData = {
  username: string;
  type: number;
};

const Navbar = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    router.push("/");
  };

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo + Navigation (neben dem Logo) */}
          <div className={styles.navLeft}>
            <Link href="/" className={styles.logo}>
              <Image src="/Automation.png" alt="Logo" width={150} height={100} />
            </Link>

            <ul className={styles.navLinks}>
              <li>
                <Link className={styles.navLink} href="/project">PROJECT</Link>
              </li>
              <li>
                <Link className={styles.navLink} href="#">PERSON</Link>
              </li>
              <li>
                <Link className={styles.navLink} href="/about">ABOUT US</Link>
              </li>
            </ul>
          </div>

          {/* Suchfeld + Benutzerbereich (nach rechts ausgerichtet) */}
          <div className={styles.navRight}>
            <form className={styles.searchForm} action="/search" method="GET">
              <input
                className={styles.formControl}
                name="q"
                placeholder="Suche"
              />
              <button className={styles.searchBtn} type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {/* Benutzerbereich */}
            <div className={styles.userSection}>
              {user ? (
                <>
                  <Link href="/wishlist">
                    <button className={styles.iconBtn} title="Favoriten">
                      <i className="bi bi-heart"></i>
                    </button>
                  </Link>

                  <div className={styles.userMenu}>
                    <span
                      className={styles.username}
                      onClick={toggleMenu}  // Toggle Funktion verwenden
                    >
                      {user.username}
                    </span>
                    {menuOpen && (
                      <div className={styles.subMenuWrap}>
                        <div className={styles.subMenu}>
                          <Link href="/account" className={styles.subMenuLink}>
                            <p>My Account</p>
                          </Link>
                          {user.type === 2 && (
                            <Link href="/user/userUebersichtmanger" className={styles.subMenuLink}>
                              <p>User Übersicht</p>
                            </Link>
                          )}
                          {user.type === 3 && (
                            <>
                              <Link href="/user/userUebersicht" className={styles.subMenuLink}>
                                <p>User Übersicht</p>
                              </Link>
                              <a className={styles.subMenuLink} onClick={() => setShowModal(true)}>
                                <p>Bild-Carousel hinzufügen</p>
                              </a>
                            </>
                          )}
                          {(user.type === 2 || user.type === 3) && (
                            <Link href="/user/neuproject" className={styles.subMenuLink}>
                              <p>Project hinzufügen</p>
                            </Link>
                          )}
                          <a className={styles.subMenuLink} onClick={handleLogout}>
                            <p>Logout</p>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className={styles.userMenu}>
                  <button
                    className={styles.iconBtn}
                    onClick={toggleMenu}  // Toggle Funktion verwenden
                  >
                    <i className="bi bi-person"></i>
                  </button>
                  {menuOpen && (
                    <div className={styles.subMenuWrap}>
                      <div className={styles.subMenu}>
                        <Link href="/login" className={styles.subMenuLink}>
                          <p>Login</p>
                        </Link>
                        <Link href="/register" className={styles.subMenuLink}>
                          <p>Registrieren</p>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.close} onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>Bild-Carousel hinzufügen</h3>
            <form
              action="/api/upload"
              method="POST"
              encType="multipart/form-data"
            >
              <label htmlFor="file">Bild auswählen:</label>
              <input type="file" name="file" id="file" required />
              <button type="submit">Bild hochladen</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
