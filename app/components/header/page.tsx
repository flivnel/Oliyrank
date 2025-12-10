"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="header-navbar">
      <Link href="/" className="header-navbar-items">
        Home
      </Link>
      <Link href="/rankings" className="header-navbar-items">
        Rankings
      </Link>
      <Link href="/about" className="header-navbar-items">
        About
      </Link>
      <Link href="/news" className="header-navbar-items">
        News
      </Link>
      <Link href="/faqs" className="header-navbar-items">
        FAQs
      </Link>
      <Link href="/contact" className="header-navbar-items">
        Contact us
      </Link>
    </nav>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // change header when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolledNow = window.scrollY > 10;
      if (isScrolledNow !== scrolled) {
        setScrolled(isScrolledNow);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-wrap">
          <div className="header-logo">
            <Link href="/">OliyRank</Link>
          </div>

          {/* Desktop nav */}
          <Navbar />

          {/* Desktop auth buttons */}
          <div className="header-button">
            <Link href="/signin" className="header-signin-btn">
              Sign In
            </Link>
            <Link href="/signup" className="header-signup-btn">
              Sign Up
            </Link>
          </div>

          {/* Mobile burger */}
          <div className="mobile-menu-btn">
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-inner">
          {/* Vertical nav */}
          <Navbar />

          {/* Auth buttons */}
          <div className="mobile-auth-buttons">
            <Link
              href="/signin"
              className="mobile-signin-btn"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="mobile-signup-btn"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
