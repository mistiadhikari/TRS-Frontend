
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  ShieldCheck,
  Wifi,
  Utensils,
  Sparkles,
  WashingMachine,
  Building2,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#292525]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[calc(100vh-78px)] overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/hero.jpg"
          alt="TRS Residence and Stays"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2A1024]/55" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[calc(100vh-78px)] max-w-7xl items-center px-5 py-20 lg:px-8">

          <div className="max-w-3xl text-white">

            {/* Location */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <MapPin size={14} />
              Bangalore, India
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Stay closer.
              <br />
              <span className="text-[#E4C98F]">
                Live better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Comfortable residences and convenient hotel stays designed
              around your work, travel, and everyday life.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/residence"
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F5E5C8]"
              >
                Explore Residence

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/booking"
                className="flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#4A1D3F]"
              >
                Book Your Stay
                <ArrowRight size={17} />
              </Link>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="h-10 w-px bg-white/30" />
        </div>
      </section>


      {/* =====================================================
          QUICK BOOKING BAR
      ===================================================== */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5 lg:px-8">

        <div className="rounded-2xl border border-[#E8DED8] bg-white p-5 shadow-xl shadow-[#4A1D3F]/10 lg:p-6">

          <div className="grid gap-5 md:grid-cols-4 md:items-end">

            {/* Check In */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#756B6B]">
                Check In
              </label>

              <input
                type="date"
                className="w-full border-b border-[#D8CCC4] bg-transparent pb-2 text-sm outline-none focus:border-[#4A1D3F]"
              />
            </div>

            {/* Check Out */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#756B6B]">
                Check Out
              </label>

              <input
                type="date"
                className="w-full border-b border-[#D8CCC4] bg-transparent pb-2 text-sm outline-none focus:border-[#4A1D3F]"
              />
            </div>

            {/* Stay Type */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#756B6B]">
                Stay Type
              </label>

              <select className="w-full border-b border-[#D8CCC4] bg-transparent pb-2 text-sm outline-none focus:border-[#4A1D3F]">
                <option>Residence</option>
                <option>Hotel</option>
                <option>Corporate Stay</option>
              </select>
            </div>

            {/* Button */}
            <Link
              to="/booking"
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#4A1D3F] px-6 text-sm font-semibold text-white transition hover:bg-[#35132D]"
            >
              Check Availability
              <ArrowRight size={16} />
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Welcome to TRS
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              A stay designed
              <br />
              around you.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#756B6B]">
              Whether you are looking for a comfortable women's residence,
              a convenient hotel, or accommodation for your corporate stay,
              TRS brings your options together under one platform.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D3F]"
            >
              Discover TRS
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE OFFER
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              What we offer
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Stay your way.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Residence */}
            <div className="group rounded-2xl bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4E9E1] text-[#4A1D3F]">
                <ShieldCheck size={23} />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B08B4F]">
                01
              </p>

              <h3 className="font-serif text-2xl text-[#4A1D3F]">
                Residence for HER
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756B6B]">
                A comfortable and secure living space designed for women.
              </p>

              <Link
                to="/residence"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D3F]"
              >
                Explore
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Hotels */}
            <div className="group rounded-2xl bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4E9E1] text-[#4A1D3F]">
                <Building2 size={23} />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B08B4F]">
                02
              </p>

              <h3 className="font-serif text-2xl text-[#4A1D3F]">
                Hotels
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756B6B]">
                Convenient accommodation for business and leisure stays.
              </p>

              <Link
                to="/hotels"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D3F]"
              >
                Explore Hotels
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Corporate */}
            <div className="group rounded-2xl bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4E9E1] text-[#4A1D3F]">
                <Sparkles size={23} />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B08B4F]">
                03
              </p>

              <h3 className="font-serif text-2xl text-[#4A1D3F]">
                Corporate Stay
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#756B6B]">
                Flexible accommodation solutions for business professionals.
              </p>

              <Link
                to="/corporate-stay"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D3F]"
              >
                Learn More
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          RESIDENCE SECTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/residence.jpg"
                alt="Residence for HER"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#4A1D3F] p-6 text-white shadow-xl sm:-right-8">
              <p className="font-serif text-3xl text-[#E4C98F]">
                24/7
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                Security
              </p>
            </div>

          </div>

          {/* Content */}
          <div className="lg:pl-8">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Residence for HER
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              Your own space.
              <br />
              Your peace of mind.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#756B6B]">
              A secure and comfortable residence created to make everyday
              living easier, more convenient, and more comfortable.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">

              <Facility
                icon={<ShieldCheck size={17} />}
                text="24×7 Security"
              />

              <Facility
                icon={<ShieldCheck size={17} />}
                text="CCTV"
              />

              <Facility
                icon={<Sparkles size={17} />}
                text="Housekeeping"
              />

              <Facility
                icon={<Utensils size={17} />}
                text="Meals"
              />

              <Facility
                icon={<Wifi size={17} />}
                text="High-speed Wi-Fi"
              />

              <Facility
                icon={<WashingMachine size={17} />}
                text="Laundry"
              />

            </div>

            <Link
              to="/residence"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#4A1D3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#35132D]"
            >
              Explore Residence
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOTELS
      ===================================================== */}
      <section className="bg-[#4A1D3F]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
                Our stays
              </p>

              <h2 className="font-serif text-4xl text-white sm:text-5xl">
                Find your stay.
              </h2>
            </div>

            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E4C98F]"
            >
              View all hotels
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">

            {/* Hotel 1 */}
            <HotelCard
              image="/images/hotel1.jpg"
              number="01"
              title="Hotel One"
              description="A convenient stay for business and leisure travelers."
              path="/hotel-1"
            />

            {/* Hotel 2 */}
            <HotelCard
              image="/images/hotel2.jpg"
              number="02"
              title="Hotel Two"
              description="Comfortable accommodation close to the places that matter."
              path="/hotel-2"
            />

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
            Why TRS
          </p>

          <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
            Everything you need,
            <br />
            closer than you think.
          </h2>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <WhyCard
            number="01"
            title="Prime Location"
            text="Stay close to workplaces, IT parks, and nearby attractions."
          />

          <WhyCard
            number="02"
            title="Safe & Secure"
            text="Security, CCTV, and secure entry for peace of mind."
          />

          <WhyCard
            number="03"
            title="Everyday Comfort"
            text="Housekeeping, meals, Wi-Fi, and laundry facilities."
          />

          <WhyCard
            number="04"
            title="Easy Booking"
            text="Quick enquiries and booking options whenever you need them."
          />

        </div>
      </section>


      {/* =====================================================
          CORPORATE CTA
      ===================================================== */}
      <section className="px-5 pb-24 lg:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#F0E6DE]">

          <div className="grid lg:grid-cols-2">

            <div className="p-10 sm:p-14 lg:p-20">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Corporate Stay
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                Accommodation
                <br />
                that works for you.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#756B6B]">
                Looking for accommodation for employees, business trips,
                or longer stays? Talk to our team about your requirements.
              </p>

              <Link
                to="/corporate-stay"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A1D3F] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Corporate Stay
                <ArrowRight size={16} />
              </Link>

            </div>

            <div className="min-h-[350px] lg:min-h-full">
              <img
                src="/images/corporate.jpg"
                alt="Corporate stay"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ATTRACTIONS
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-white">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Explore the neighborhood
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                Work nearby.
                <br />
                Live comfortably.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#756B6B]">
                Discover nearby IT parks, offices, restaurants, shopping,
                and other places around your stay.
              </p>

              <Link
                to="/attractions"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D3F]"
              >
                Explore nearby attractions
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-[380px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#E9E0D9]">

              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4A1D3F] text-white">
                  <MapPin size={25} />
                </div>

                <h3 className="mt-4 font-serif text-2xl text-[#4A1D3F]">
                  TRS Residence & Stays
                </h3>

                <p className="mt-2 text-sm text-[#756B6B]">
                  Bangalore, India
                </p>

                <Link
                  to="/attractions"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4A1D3F]"
                >
                  View Location
                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[#291022] px-5 py-24 text-center lg:px-8 lg:py-32">

        <div className="mx-auto max-w-3xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C98F]">
            Your stay starts here
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Find your space.
            <br />
            Make it yours.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Choose a comfortable residence, hotel stay, or corporate
            accommodation that fits your needs.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/booking"
              className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
            >
              Book Your Stay
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#4A1D3F]"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};


/* =========================================================
   FACILITY COMPONENT
========================================================= */

const Facility = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 text-sm text-[#625A5A]">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4E9E1] text-[#4A1D3F]">
        {icon}
      </span>

      {text}
    </div>
  );
};


/* =========================================================
   HOTEL CARD
========================================================= */

const HotelCard = ({
  image,
  number,
  title,
  description,
  path,
}) => {
  return (
    <Link
      to={path}
      className="group relative overflow-hidden rounded-[1.5rem]"
    >
      <div className="h-[480px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#170B16]/90 via-[#170B16]/20 to-transparent" />

      {/* Number */}
      <span className="absolute left-7 top-7 text-sm font-medium text-white/70">
        {number}
      </span>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">

        <h3 className="font-serif text-3xl text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#E4C98F]">
          Explore
          <ArrowRight size={16} />
        </div>

      </div>
    </Link>
  );
};


/* =========================================================
   WHY CARD
========================================================= */

const WhyCard = ({ number, title, text }) => {
  return (
    <div className="border-t border-[#D8CCC4] pt-6">

      <span className="text-xs font-bold tracking-widest text-[#B08B4F]">
        {number}
      </span>

      <h3 className="mt-5 font-serif text-xl text-[#4A1D3F]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#756B6B]">
        {text}
      </p>

    </div>
  );
};

export default Home;

