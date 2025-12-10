// app/layout/header/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rankings", label: "Rankings" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact us" },
];

function Navbar({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="header-navbar">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={
            "header-navbar-items" +
            (pathname === link.href ? " active" : "")
          }
          onClick={onLinkClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {/* Desktop navbar */}
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

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-inner">
          <Navbar onLinkClick={closeMobileMenu} />

          <div className="mobile-auth-buttons">
            <button className="mobile-signin-btn">
              Sign In
            </button>
            <button className="mobile-signup-btn">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
