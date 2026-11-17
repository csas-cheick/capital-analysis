"use client";

import { FC, useState } from "react";
import { ChevronDown, Menu, Moon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";

const activitySummaries: Record<string, string> = {
  "Ingénierie financière":
    "Structurez vos projets et optimisez vos décisions financières.",
  "IT & Développement":
    "Des solutions numériques adaptées aux besoins de votre organisation.",
  "Étude & Conseil":
    "Des analyses fiables pour guider vos orientations stratégiques.",
  "Assistance comptable":
    "Un suivi comptable rigoureux pour une gestion plus sereine.",
};

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Check if link is active
  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-5 sm:px-8 lg:px-10">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
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
              className="h-10 w-10"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold leading-none text-gray-900">
                Capital Analysis
              </span>
              <span className="mt-0.5 block text-[11px] text-orange-500">
                La perspective de vos chiffres
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {/* Desktop Navigation */}
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name,
                      )
                    }
                    aria-expanded={activeDropdown === item.name}
                    aria-controls="activities-menu"
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:text-[#0a1628] ${
                      activeDropdown === item.name ? "text-[#0a1628]" : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`px-3 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:text-[#0a1628] ${
                      isActive(item.href) ? "text-[#0a1628]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div
                    id="activities-menu"
                    className="animate-fadeIn fixed left-0 right-0 top-16 border-t border-gray-200 bg-white"
                  >
                    <div className="grid w-full grid-cols-4 divide-x divide-gray-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={closeMenus}
                          className={`group min-h-44 px-7 py-8 transition-colors hover:bg-[#0a1628]/5 ${
                            isActive(child.href) ? "bg-[#0a1628]/5" : ""
                          }`}
                        >
                          <span
                            className={`block text-base font-semibold transition-colors ${
                              isActive(child.href)
                                ? "text-[#0a1628]"
                                : "text-gray-900 group-hover:text-[#0a1628]"
                            }`}
                          >
                            {child.name}
                          </span>
                          <span className="mt-3 block text-sm leading-relaxed text-gray-500">
                            {activitySummaries[child.name]}
                          </span>
                          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#0a1628]">
                            En savoir plus
                            <ChevronDown className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="col-start-3 justify-self-end hidden items-center gap-5 lg:flex">
            <button
              type="button"
              aria-label="Changer de thème"
              className="grid h-10 w-10 place-items-center text-[#0a1628] transition-colors hover:text-[#0f1f35]"
            >
              <Moon className="h-5 w-5" aria-hidden="true" />
            </button>
            <Link
              href="/contact"
              onClick={closeMenus}
              className="rounded-full bg-[#0a1628] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#0f1f35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="col-start-3 justify-self-end p-2 text-[#0a1628] transition-colors hover:text-[#0f1f35] lg:hidden"
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
                      className="w-full flex items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
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
                                ? "bg-[#0a1628]/5 text-[#0a1628]"
                                : "text-gray-600 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
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
                        ? "bg-[#0a1628]/5 text-[#0a1628]"
                        : "text-gray-700 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
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
