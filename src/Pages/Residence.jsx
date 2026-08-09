
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Camera,
  Sparkles,
  Utensils,
  Wifi,
  WashingMachine,
  MapPin,
  Heart,
  Phone,
  MessageCircle,
  Clock,
} from "lucide-react";

import { Link } from "react-router-dom";

const Residence = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#292525]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[75vh] overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/residence-hero.jpg"
          alt="TRS Residence for HER"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#291022]/65" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8 lg:pb-20">

          <div className="max-w-3xl text-white">

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <Heart size={14} />
              Residence for HER
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Your own space.
              <br />
              <span className="text-[#E4C98F]">
                Your peace of mind.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              A comfortable and secure residence designed to make
              everyday living easier, safer, and more convenient.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/booking"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F0DDAE]"
              >
                Book Your Stay

                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="https://wa.me/XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#4A1D3F]"
              >
                <MessageCircle size={17} />
                Enquire on WhatsApp
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Heading */}
          <div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              More than a room
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              A place to feel
              <br />
              comfortable.
            </h2>

          </div>

          {/* Description */}
          <div>

            <p className="text-base leading-8 text-[#756B6B]">
              TRS Residence for HER is designed around comfortable
              everyday living. From security and cleanliness to
              connectivity and essential facilities, everything is
              brought together to make your stay convenient.
            </p>

            <p className="mt-5 text-base leading-8 text-[#756B6B]">
              Whether you're staying for work, study, or a longer
              period, the residence provides a space where you can
              settle in and focus on what matters.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Residence facilities
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Everything you need,
              <br />
              in one place.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#756B6B]">
              Thoughtfully planned facilities to make everyday
              living simple and comfortable.
            </p>

          </div>


          {/* Facility Grid */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#DED2CA] bg-[#DED2CA] sm:grid-cols-2 lg:grid-cols-3">

            <FacilityCard
              icon={<ShieldCheck size={25} />}
              number="01"
              title="24/7 Security"
              description="Security-focused accommodation designed to give residents peace of mind."
            />

            <FacilityCard
              icon={<Camera size={25} />}
              number="02"
              title="CCTV"
              description="CCTV coverage as part of the residence security setup."
            />

            <FacilityCard
              icon={<Sparkles size={25} />}
              number="03"
              title="Housekeeping"
              description="Housekeeping support to help maintain a clean and comfortable environment."
            />

            <FacilityCard
              icon={<Utensils size={25} />}
              number="04"
              title="Meals"
              description="Meal facilities designed to make everyday living more convenient."
            />

            <FacilityCard
              icon={<Wifi size={25} />}
              number="05"
              title="High-Speed Wi-Fi"
              description="Reliable connectivity for work, study, entertainment, and everyday needs."
            />

            <FacilityCard
              icon={<WashingMachine size={25} />}
              number="06"
              title="Laundry"
              description="Laundry facilities that make longer stays easier and more convenient."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          LIFESTYLE SECTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/residence-room.jpg"
                alt="Comfortable residence room"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#4A1D3F] p-6 text-white shadow-xl sm:-right-8">

              <Heart
                size={20}
                className="text-[#E4C98F]"
              />

              <p className="mt-3 font-serif text-xl">
                Feel at home.
              </p>

              <p className="mt-1 text-xs text-white/50">
                Comfortable everyday living
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="lg:pl-8">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Designed for everyday life
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              Comfort without
              <br />
              the complications.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#756B6B]">
              Your accommodation should make your routine easier,
              not add to it. TRS brings together essential services
              and facilities so residents can focus on their work,
              studies, and personal life.
            </p>

            {/* Points */}
            <div className="mt-8 space-y-4">

              <FeaturePoint text="Secure residential environment" />

              <FeaturePoint text="Housekeeping support" />

              <FeaturePoint text="Meals and everyday convenience" />

              <FeaturePoint text="High-speed Wi-Fi connectivity" />

              <FeaturePoint text="Laundry facilities" />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}
      <section className="bg-[#4A1D3F]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Content */}
            <div className="text-white">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <MapPin
                  size={22}
                  className="text-[#E4C98F]"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
                Location
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Stay close to
                <br />
                what matters.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                The residence is positioned to provide convenient
                access to workplaces, IT parks, restaurants,
                shopping, and other nearby destinations.
              </p>

              <Link
                to="/attractions"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E4C98F] px-6 py-3 text-sm font-semibold text-[#E4C98F] transition duration-300 hover:bg-[#E4C98F] hover:text-[#4A1D3F]"
              >
                Explore Nearby
                <ArrowRight size={16} />
              </Link>

            </div>


            {/* Map Placeholder */}
            <div className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#F0E6DE]">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4A1D3F] text-white">
                  <MapPin size={28} />
                </div>

                <h3 className="mt-5 font-serif text-2xl text-[#4A1D3F]">
                  TRS Residence
                </h3>

                <p className="mt-2 text-sm text-[#756B6B]">
                  Bangalore, India
                </p>

                <p className="mt-4 max-w-xs text-xs leading-5 text-[#756B6B]">
                  Interactive Google Maps location can be
                  integrated here once the exact property
                  location is finalized.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO IS IT FOR
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
            A space for you
          </p>

          <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
            Designed around
            <br />
            your lifestyle.
          </h2>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <AudienceCard
            number="01"
            title="Working Professionals"
            text="A convenient place to stay while keeping your work and everyday routine close."
          />

          <AudienceCard
            number="02"
            title="Students"
            text="A comfortable environment with connectivity and essential facilities for everyday life."
          />

          <AudienceCard
            number="03"
            title="Longer Stays"
            text="Practical accommodation with facilities that make extended stays easier."
          />

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="border-t border-[#E8DED8] bg-white">

        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Questions
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Frequently asked.
            </h2>

          </div>


          <div className="mt-12 space-y-3">

            <FAQ
              question="What facilities are available?"
              answer="The residence includes security, CCTV, housekeeping, meals, high-speed Wi-Fi, and laundry facilities."
            />

            <FAQ
              question="How can I enquire about a stay?"
              answer="You can contact the residence through WhatsApp or use the booking and enquiry options on the website."
            />

            <FAQ
              question="Can I book a longer stay?"
              answer="The residence is designed to support comfortable longer-term living. Contact the team to discuss your requirements."
            />

            <FAQ
              question="Where is the residence located?"
              answer="The project is planned around the Bellandur, Bangalore area. The exact property address can be added once finalized."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[#291022] px-5 py-24 text-center lg:px-8 lg:py-32">

        <div className="mx-auto max-w-3xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C98F]">
            Ready to stay?
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Your comfortable
            <br />
            space is waiting.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Get in touch with TRS Residence and find a stay that
            fits your needs.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/booking"
              className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F0DDAE]"
            >
              Book Your Stay
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="https://wa.me/XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#4A1D3F]"
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
   FACILITY CARD
========================================================= */

const FacilityCard = ({
  icon,
  number,
  title,
  description,
}) => {
  return (
    <div className="bg-[#FAF7F2] p-8 transition duration-300 hover:bg-white sm:p-10">

      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F]">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-widest text-[#B08B4F]">
          {number}
        </span>

      </div>

      <h3 className="mt-7 font-serif text-2xl text-[#4A1D3F]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#756B6B]">
        {description}
      </p>

    </div>
  );
};


/* =========================================================
   FEATURE POINT
========================================================= */

const FeaturePoint = ({ text }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F]">
        <Check size={14} strokeWidth={2.5} />
      </div>

      <span className="text-sm text-[#625A5A]">
        {text}
      </span>

    </div>
  );
};


/* =========================================================
   AUDIENCE CARD
========================================================= */

const AudienceCard = ({
  number,
  title,
  text,
}) => {
  return (
    <div className="rounded-2xl border border-[#E8DED8] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <span className="text-xs font-bold tracking-widest text-[#B08B4F]">
        {number}
      </span>

      <h3 className="mt-6 font-serif text-2xl text-[#4A1D3F]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#756B6B]">
        {text}
      </p>

    </div>
  );
};


/* =========================================================
   FAQ
========================================================= */

const FAQ = ({
  question,
  answer,
}) => {
  return (
    <details className="group border-b border-[#E8DED8] py-5">

      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-[#4A1D3F]">

        <span>{question}</span>

        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F] transition duration-300 group-open:rotate-45">
          <span className="text-lg font-light">
            +
          </span>
        </span>

      </summary>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#756B6B]">
        {answer}
      </p>

    </details>
  );
};

export default Residence;

