"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "INKWell" },
  { href: "/gallery", label: "Art Collage" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-glass-border shadow-lg shadow-black/10"
          : "bg-background/30 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-all duration-300 hover:opacity-80"
          >
            Mirza<span className="text-muted-foreground">Space</span>
          </Link>

          {/* Horizontal Navigation - Always Visible */}
          <ul className="flex items-center gap-4 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-xs sm:text-sm font-medium transition-all duration-300"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-foreground transition-all duration-300 ease-out ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
