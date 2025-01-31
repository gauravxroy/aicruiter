"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../public/image.svg";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Automation", href: "#" },
  ];

  const handleMenuToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <header className="py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/dashboard"
              title="Home"
              className="flex rounded outline-none "
            >
              <Image src={img} width={40} height={40} alt="logo" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={handleMenuToggle}
              aria-expanded={expanded}
            >
              <span className={!expanded ? "" : "hidden"} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
              <span className={expanded ? "" : "hidden"} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            <UserButton />
          </div>
        </div>

        {/* Mobile Navigation */}
        {expanded && (
          <nav>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                {navLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {link.title}
                  </a>
                ))}
                <a
                  href="#"
                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Customer Login
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign up
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
