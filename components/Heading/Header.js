"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import logo from "@/public/images/logo.png";

import './style.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='navbar wrapper'>
      <nav className="container">
        <Link href="/" className="logo">
          <Image src={logo} alt="Logo" width="54px" height="54px" />
          <span>mema<strong>tech</strong></span>
        </Link>

        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="desktop-menu">
          <ul className="nav-links">
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/programs" className="nav-link">Programs</Link></li>
            <li><Link href="/blog" className="nav-link">Blog</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
          <Link href="/join" className="btn join-btn">Join Us</Link>
        </div>

        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/programs" onClick={toggleMenu}>Programs</Link></li>
            <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li>
              <Link href="/join" className="btn join-btn mt-3 text-white" onClick={toggleMenu}>
                Join Us
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Header