
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Residence",
    path: "/residence",
  },
  {
    name: "Hotels",
    path: "/hotels",
  },
  {
    name: "Corporate Stay",
    path: "/corporate-stay",
  },
  {
    name: "Explore",
    path: "/attractions",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DED8] bg-[#FAF7F2]/95 backdrop-blur-lg">
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          {/* Logo Circle */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A96E] bg-[#4A1D3F]">
            <span className="font-serif text-sm font-semibold tracking-wide text-[#F5E5C8]">
              TRS
            </span>
          </div>

          {/* Logo Text */}
          <div className="leading-none">
            <h1 className="font-serif text-xl tracking-wide text-[#4A1D3F]">
              TRS
            </h1>

            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-[#756B6B]">
              Residence & Stays
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="group relative py-2 text-[13px] font-medium tracking-wide"
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#4A1D3F]"
                        : "text-[#625A5A] group-hover:text-[#4A1D3F]"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Gold underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A96E] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* WhatsApp */}
          <a
            href="https://wa.me/XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#D8CCC4] px-4 py-2.5 text-xs font-medium text-[#4A1D3F] transition-all duration-300 hover:border-[#4A1D3F] hover:bg-[#4A1D3F] hover:text-white"
          >
            <MessageCircle
              size={15}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            WhatsApp
          </a>

          {/* Book Now */}
          <Link
            to="/booking"
            className="group flex items-center gap-2 rounded-full bg-[#4A1D3F] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#35132D] hover:shadow-lg"
          >
            Book Your Stay

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CCC4] text-[#4A1D3F] transition hover:bg-[#F1E9E3] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-[#E8DED8] bg-[#FAF7F2] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-3">

          {/* Mobile Links */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-[#E8DED8] py-4 text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-[#4A1D3F]"
                      : "text-[#625A5A] hover:text-[#4A1D3F]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile WhatsApp */}
          <a
            href="https://wa.me/XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[#4A1D3F] py-3 text-sm font-medium text-[#4A1D3F] transition hover:bg-[#4A1D3F] hover:text-white"
          >
            <MessageCircle size={17} />

            WhatsApp Us
          </a>

          {/* Mobile Booking */}
          <Link
            to="/booking"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#4A1D3F] py-3 text-sm font-semibold text-white transition hover:bg-[#35132D]"
          >
            Book Your Stay

            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

