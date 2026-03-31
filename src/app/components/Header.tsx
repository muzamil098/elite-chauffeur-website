import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header({ onBookNow }: { onBookNow: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-black">
              Elite<span className="text-yellow-600">Chauffeur</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isActive(link.path) ? "text-yellow-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+442012345678"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="whitespace-nowrap">+44 20 1234 5678</span>
            </a>
            <Button 
              onClick={onBookNow} 
              className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-sm whitespace-nowrap"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-yellow-50 text-yellow-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="tel:+442012345678"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>+44 20 1234 5678</span>
              </a>
              <Button onClick={() => { onBookNow(); setMobileMenuOpen(false); }} className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}