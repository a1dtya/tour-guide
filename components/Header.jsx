"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-wrapper ${
        isAtTop
          ? "bg-transparent text-[var(--color-white)] "
          : "bg-[var(--color-background)] text-[var(--color-text-dark)]"
      } `}
    >
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <Link href="/">
              <h1>tour guide</h1>
            </Link>
          </div>
          <div className="hidden md:flex header-nav-wrapper">
            <div className="header-nav">
              <nav className=" header-nav-links">
                <ul>
                  {/* <li>
                    <Link href="/">Home</Link>
                  </li> */}
                  <li>
                    <Link href="/tours">About Us</Link>
                  </li>
                  <li>
                    <Link href="/profile">Popular Destinations</Link>
                  </li>

                  <li>
                    <Link href="/tours">Our Packages</Link>
                  </li>

                  <li>
                    <Link href="/tours">Help</Link>
                  </li>
                </ul>
              </nav>

              <div className="primary-btn">Sign in</div>
            </div>
          </div>

          <div
            className="flex md:hidden lg:hidden header-burgermenu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <>
                <IoClose className="burger-menu" />

                <div className="burger-menu-nav">
                  <ul>
                    {/* <li>
                      <Link href="/">Home</Link>
                    </li> */}
                    <li>
                      <Link href="/tours">About Us</Link>
                    </li>
                    <li>
                      <Link href="/profile">Popular Destinations</Link>
                    </li>

                    <li>
                      <Link href="/tours">Our Packages</Link>
                    </li>

                    <li>
                      <Link href="/tours">Help</Link>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <IoMenu className="burger-menu" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
