"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/results", label: "Results" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { 
      href: "#", 
      label: "Legal", 
      subLinks: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms & Conditions " }
      ]
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Mobile menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                Welcome
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  link.subLinks ? (
                    <div key={link.href} className="relative group">
                      <button className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                        {link.label} ▼
                      </button>
                      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 w-48 z-10">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={`block px-4 py-2 text-sm ${pathname === subLink.href ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-50'}`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        pathname === link.href
                          ? 'bg-blue-900 text-white'
                          : 'text-white hover:bg-blue-700 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.flatMap(link => 
              link.subLinks 
                ? link.subLinks.map(subLink => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === subLink.href
                          ? 'bg-blue-900 text-white'
                          : 'text-white hover:bg-blue-600'
                      }`}
                    >
                      {subLink.label}
                    </Link>
                  ))
                : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href
                        ? 'bg-blue-900 text-white'
                        : 'text-white hover:bg-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}