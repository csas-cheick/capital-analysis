"use client";

import { FC, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { useScroll } from "@/hooks/useScroll";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isScrolled = useScroll(20);
  const dropdownRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Dropdown handlers
  const handleDropdownEnter = (name: string) => {
    if (dropdownRef.current) clearTimeout(dropdownRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenus}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logoC.svg"
              alt="Capital Analysis"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <div className="hidden sm:block">
              <span
                className={`font-bold text-lg leading-none ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Capital Analysis
              </span>
              <span
                className={`block text-xs mt-0.5 ${
                  isScrolled ? "text-gray-500" : "text-gray-400"
                }`}
              >
                La perspective de vos chiffres
              </span>
            </div>
          </Link>

          <div className="ml-auto hidden lg:flex items-center gap-3">
            {/* Desktop Navigation */}
            <nav className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  {item.children ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        isScrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      } ${activeDropdown === item.name ? (isScrolled ? "text-blue-600 bg-gray-50" : "text-white bg-white/10") : ""}`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        isScrolled
                          ? `text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${isActive(item.href) ? "text-blue-600" : ""}`
                          : `text-white/90 hover:text-white hover:bg-white/10 ${isActive(item.href) ? "text-white" : ""}`
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeMenus}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.href)
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`ml-auto lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name,
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMenus}
                            className={`block px-4 py-2.5 rounded-lg text-sm ${
                              isActive(child.href)
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
