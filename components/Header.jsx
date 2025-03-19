"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";

const Header = () => {

  const [isHomePage, setIsHomePage] = useState(false);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
    
  //   const handleScroll = () => {
  //     setIsAtTop(window.scrollY === 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    
    // setIsHomePage(router.pathname === '/');

    
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // }, [router.pathname]); 


    }, []);


  return (
    <header
      className={`header-wrapper
        ${isHomePage ? (
          isAtTop
            ? "bg-transparent text-[var(--color-white)] border-none home-top"
            : "bg-[var(--color-background)] text-[var(--color-text-gray)] border-b-[#E6E6E6] border-b-[1px]"
        ) : "fixed-top-header bg-[var(--color-background)] text-[var(--color-text-gray)] border-b-[#E6E6E6] border-b-[1px]"}
      `}
    >
     
        <div className="header-content">
          <div className="header-logo">
            <Link href="/">
              tour guide
            </Link>
          </div>
          <div className="hidden lg:flex header-nav-wrapper">
            <div className="header-nav">
              <nav className="header-nav-links">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
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

              <div className="btn-type-1">Sign in</div>
            </div>
          </div>

          <div
            className="flex  lg:hidden header-burgermenu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <>
                <IoClose className="burger-menu" />

                <div className="burger-menu-nav">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
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
     
    </header>
  );
};

export default Header;
