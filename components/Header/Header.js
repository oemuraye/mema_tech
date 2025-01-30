"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

import logo from "@/public/images/logo.png";

import './styles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // const isActive = (path) => pathname === path;
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='navbar wrapper py-4 sticky-top'>
      <nav className="container-fluid">
        <Link href="/" className="logo">
          <Image src={logo} alt="Logo" width="54px" height="54px" />
          <span>mema<strong>tech</strong></span>
        </Link>

        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          {/* <div></div> */}
          <div></div>
        </div>

        <div className="desktop-menu">
          <ul className="nav-links">
            <li><Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</Link></li>
            <li><Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>About</Link></li>
            <li><Link href="/programs" className={`nav-link ${isActive("/programs") ? "active" : ""}`}>Programs</Link></li>
            <li><Link href="/blog" className={`nav-link ${isActive("/blog") ? "active" : ""}`}>Blog</Link></li>
            <li><Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>Contact</Link></li>
          </ul>
        </div>
        <div className="desktop-menu">
          <Link href="https://forms.gle/987afboskBLxqqvi8" target="_blank" className="btn join-btn">Join Us</Link>
          <Link href="https://wa.me/2348138904254?text=Hello%2C%20I'm%20interested%20in%20making%20a%20donation%20to%20support%20your%20Mematech.%20Could%20you%20please%20tell%20me%20more%20about%20how%20my%20donation%20would%20be%20used%20and%20what%20impact%20it%20would%20have%20on%20the%20girls%20you're%20supporting%3F"
           target="_blank" className="btn join-btn outline-btn ms-3">Donate</Link>
        </div>

        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li><Link href="/" onClick={toggleMenu} className={isActive("/") ? "active" : ""}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu} className={isActive("/about") ? "active" : ""}>About</Link></li>
            <li><Link href="/programs" onClick={toggleMenu} className={isActive("/programs") ? "active" : ""}>Programs</Link></li>
            <li><Link href="/blog" onClick={toggleMenu} className={isActive("/blog") ? "active" : ""}>Blog</Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className={isActive("/contact") ? "active" : ""}>Contact</Link></li>
            <li>
              <Link href="https://forms.gle/987afboskBLxqqvi8" target="_blank" className="btn join-btn mt-3 text-white" onClick={toggleMenu}>
                Join Us
              </Link>
            </li>
            <li>
              <Link href="https://wa.me/2348138904254?text=Hello%2C%20I'm%20interested%20in%20making%20a%20donation%20to%20support%20your%20Mematech.%20Could%20you%20please%20tell%20me%20more%20about%20how%20my%20donation%20would%20be%20used%20and%20what%20impact%20it%20would%20have%20on%20the%20girls%20you're%20supporting%3F"
               target="_blank" className="btn join-btn outline-btn mt-3 text-white" onClick={toggleMenu}>
                Donate 
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Header