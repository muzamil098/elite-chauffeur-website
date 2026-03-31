import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold text-white mb-4">
              Elite<span className="text-yellow-600">Chauffeur</span>
            </div>
            <p className="text-sm mb-4">
              Premium chauffeur services for corporate, airport transfers, and special events.
              Experience luxury and professionalism.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-yellow-600 transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/airport-transfers" className="hover:text-yellow-600 transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-chauffeur" className="hover:text-yellow-600 transition-colors">
                  Corporate Chauffeur
                </Link>
              </li>
              <li>
                <Link to="/services/events-weddings" className="hover:text-yellow-600 transition-colors">
                  Events & Weddings
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Hourly Hire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Long Distance Travel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+442012345678" className="hover:text-yellow-600 transition-colors">
                    +44 20 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@elitechauffeur.com" className="hover:text-yellow-600 transition-colors">
                    info@elitechauffeur.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>123 Park Lane, London, W1K 7AA, United Kingdom</div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>24/7 Service Available</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>
              &copy; {new Date().getFullYear()} EliteChauffeur. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
