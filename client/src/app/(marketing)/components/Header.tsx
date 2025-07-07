"use client";

import { buttonPrimary, buttonSecondary } from "@/components/Button";
import SearchBar from "@/components/SearchBar";
import { navLinks } from "@/constants";
import { Close, Menu } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  /////////////////////////////////////////// MOBILE MENU ////////////////////////////////////////////
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
    }
  }, [mobileOpen]);

  /////////////////////////////////////////// STICKY TRANSPARENT NAV ////////////////////////////////////////////
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <header
      className={`fixed left-0 top-0 w-full z-10 transitions ${
        isSticky
          ? "bg-primary shadow-sm backdrop-blur-md text-white"
          : "bg-transparent text-primary"
      }`}
    >
      <div className="root-container hidden lg:flex items-center justify-between h-16">
        {/* DESKTOP  */}
        <div className="flex-2 flex items-center gap-8">
          {/* LOGO  */}
          <Link href="/" className="flex items-center gap-1">
            {isSticky ? (
              <Image
                src="/logo/logo2.svg"
                alt="Hudle"
                width={200}
                height={200}
                className="size-7"
              />
            ) : (
              <Image
                src="/logo/logo.svg"
                alt="Hudle"
                width={200}
                height={200}
                className="size-7"
              />
            )}
            <h3 className="hidden lg:block text-2xl font-viga">Hudle</h3>
          </Link>

          {/* DESKTOP NAV  */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* SEARCH & LOGIN  */}
        <div className="flex-1 flex items-center gap-8 w-full whitespace-nowrap">
          <SearchBar />
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium">
              Sign in
            </Link>
            <Link
              href="/signup"
              className={
                isSticky ? `${buttonSecondary} !border-white` : buttonPrimary
              }
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE MENU  */}
      <div className="relative">
        {/* MOBILE TOGGLE  */}
        <div className="root-container lg:hidden flex items-center justify-between h-16">
          <button
            className="lg:hidden transition-transform duration-300 ease-in-out"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <Close className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>

          {/* LOGO  */}
          <Link href="/">
            {isSticky ? (
              <Image
                src="/logo/logo2.svg"
                alt="Hudle"
                width={200}
                height={200}
                className="size-7"
              />
            ) : (
              <Image
                src="/logo/logo.svg"
                alt="Hudle"
                width={200}
                height={200}
                className="size-7"
              />
            )}
          </Link>

          <Link
            href="/login"
            className={
              isSticky ? `${buttonSecondary} !border-white` : buttonPrimary
            }
          >
            Sign in
          </Link>
        </div>

        {/* MOBILE OPEN */}
        <div
          className={`absolute left-0 top-16 w-full h-[calc(100vh-64px)] bg-white z-20 transform transition-all duration-500 ease-in-out origin-top
      ${
        mobileOpen
          ? "scale-y-100 opacity-100"
          : "scale-y-0 opacity-0 pointer-events-none"
      }
    `}
          style={{ transformOrigin: "top" }}
        >
          {/* Menu content goes here */}
          <div
            className={`py-10 flex flex-col justify-between h-full ${
              isSticky ? "text-primary" : ""
            }`}
          >
            <nav className="flex flex-col gap-2 ">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`root-container flex items-center gap-2 capitalize py-3 font-medium ${
                    pathname === link.href
                      ? "bg-primary/5 border-r-4 border-primary"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="root-container pb-10 space-y-4 w-full">
              <div>
                <SearchBar className="py-3" />
              </div>
              {/* <Link href="/signup" className={`${buttonPrimary} w-full py-2`}>Sign up</Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
