
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#291022] text-white">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-12">

          {/* =====================================
              BRAND
          ===================================== */}
          <div className="lg:col-span-4">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A96E] bg-[#4A1D3F]">
                <span className="font-serif text-sm font-semibold tracking-wide text-[#F5E5C8]">
                  TRS
                </span>
              </div>

              {/* Brand Name */}
              <div>
                <h2 className="font-serif text-2xl tracking-wide">
                  TRS
                </h2>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Residence & Stays
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Comfortable residences and convenient hotel stays designed
              around your work, travel, and everyday life.
            </p>

            {/* Social Links */}
           

          </div>


          {/* =====================================
              EXPLORE
          ===================================== */}
          <div className="lg:col-span-2">

            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C98F]">
              Explore
            </h3>

            <div className="flex flex-col gap-3">

              <FooterLink
                to="/"
                text="Home"
              />

              <FooterLink
                to="/residence"
                text="Residence"
              />

              <FooterLink
                to="/hotels"
                text="Hotels"
              />

              <FooterLink
                to="/corporate-stay"
                text="Corporate Stay"
              />

              <FooterLink
                to="/attractions"
                text="Explore"
              />

              <FooterLink
                to="/contact"
                text="Contact"
              />

            </div>

          </div>


          {/* =====================================
              SERVICES
          ===================================== */}
          <div className="lg:col-span-2">

            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C98F]">
              Services
            </h3>

            <div className="flex flex-col gap-3">

              <FooterLink
                to="/residence"
                text="Women's Residence"
              />

              <FooterLink
                to="/hotels"
                text="Hotel Stays"
              />

              <FooterLink
                to="/corporate-stay"
                text="Corporate Booking"
              />

              <FooterLink
                to="/booking"
                text="Online Booking"
              />

              <FooterLink
                to="/contact"
                text="Enquiries"
              />

            </div>

          </div>


          {/* =====================================
              CONTACT
          ===================================== */}
          <div className="lg:col-span-4">

            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C98F]">
              Get in touch
            </h3>

            <div className="space-y-5">

              {/* Location */}
              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#C9A96E]"
                />

                <div>
                  <p className="text-sm font-medium">
                    Bangalore, India
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Exact property address will be added here.
                  </p>
                </div>

              </div>


              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="text-[#C9A96E]"
                />

                +91 00000 00000
              </a>


              {/* Email */}
              <a
                href="mailto:hello@trs.com"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="text-[#C9A96E]"
                />

                hello@trs.com
              </a>

            </div>


            {/* WhatsApp Button */}
            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E4C98F] px-5 py-3 text-xs font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F0DDAE]"
            >
              <MessageCircle size={16} />

              Chat on WhatsApp

              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>

      </div>


      {/* =========================================
          BOOKING CTA
      ========================================= */}
      <div className="border-y border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>

            <h3 className="font-serif text-2xl">
              Planning your next stay?
            </h3>

            <p className="mt-1 text-sm text-white/50">
              Find a space that feels right for you.
            </p>

          </div>

          <Link
            to="/booking"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#C9A96E] px-6 py-3 text-sm font-semibold text-[#E4C98F] transition duration-300 hover:bg-[#E4C98F] hover:text-[#4A1D3F]"
          >
            Book Your Stay

            <ArrowUpRight
              size={16}
              className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

      </div>


      {/* =========================================
          BOTTOM BAR
      ========================================= */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} TRS Residence & Stays.
            All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-5">

            <Link
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};


/* =============================================
   FOOTER LINK COMPONENT
============================================= */

const FooterLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="group flex w-fit items-center gap-1.5 text-sm text-white/55 transition duration-300 hover:text-white"
    >
      {text}

      <ArrowUpRight
        size={12}
        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
};


/* =============================================
   SOCIAL ICON COMPONENT
============================================= */

const SocialIcon = ({ href, text, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[10px] font-bold text-white/60 transition duration-300 hover:border-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#4A1D3F]"
    >
      {text}
    </a>
  );
};

export default Footer;

