
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Building2,
  Users,
  Wifi,
  ShieldCheck,
  CalendarCheck,
  BriefcaseBusiness,
  MapPin,
  Headphones,
  FileText,
  Coffee,
  Car,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

const CorporateStay = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#292525]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[78vh] overflow-hidden">

        <img
          src="/images/corporate-hero.jpg"
          alt="Corporate stay"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#291022]/70" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8 lg:pb-20">

          <div className="max-w-3xl text-white">

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <BriefcaseBusiness
                size={14}
                className="text-[#E4C98F]"
              />

              Corporate Stays
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Business travel,
              <br />
              <span className="text-[#E4C98F]">
                made comfortable.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Comfortable and convenient accommodation solutions
              for companies, teams, professionals, and business
              travelers.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F0DDAE]"
              >
                Send an Enquiry

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
                Talk to Us
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

          <div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Corporate accommodation
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              A smarter way to
              <br />
              manage business stays.
            </h2>

          </div>

          <div>

            <p className="text-base leading-8 text-[#756B6B]">
              TRS Corporate Stay is designed for businesses that
              need comfortable accommodation for employees,
              consultants, clients, and visiting professionals.
            </p>

            <p className="mt-5 text-base leading-8 text-[#756B6B]">
              Instead of arranging accommodation separately for
              every trip, companies can work with one accommodation
              partner for a smoother and more convenient experience.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-2xl text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Built for business
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Accommodation for
              <br />
              every business need.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#756B6B]">
              Flexible accommodation options for different types
              of business travelers.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <AudienceCard
              icon={<Users size={24} />}
              number="01"
              title="Employees"
              text="Comfortable accommodation for employees relocating, travelling, or working on projects."
            />

            <AudienceCard
              icon={<BriefcaseBusiness size={24} />}
              number="02"
              title="Business Travelers"
              text="Convenient stays for professionals visiting the city for meetings and business activities."
            />

            <AudienceCard
              icon={<Building2 size={24} />}
              number="03"
              title="Corporate Teams"
              text="Accommodation solutions for teams working on projects or temporary assignments."
            />

            <AudienceCard
              icon={<Users size={24} />}
              number="04"
              title="Clients & Guests"
              text="A comfortable place to accommodate visiting clients, partners, and business guests."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          CORPORATE FEATURES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">

              <img
                src="/images/corporate-stay.jpg"
                alt="Corporate accommodation"
                className="h-[540px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#4A1D3F] p-6 text-white shadow-xl sm:-right-8">

              <Building2
                size={22}
                className="text-[#E4C98F]"
              />

              <p className="mt-3 font-serif text-xl">
                Business ready.
              </p>

              <p className="mt-1 text-xs text-white/50">
                Comfortable corporate stays
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="lg:pl-8">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Why TRS Corporate Stay
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              Everything your
              <br />
              team needs.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#756B6B]">
              From reliable connectivity to comfortable accommodation,
              our corporate stay offering is designed to make business
              travel easier for both companies and employees.
            </p>

            <div className="mt-8 space-y-4">

              <FeaturePoint text="Comfortable accommodation" />

              <FeaturePoint text="Reliable Wi-Fi connectivity" />

              <FeaturePoint text="Security-focused environment" />

              <FeaturePoint text="Housekeeping support" />

              <FeaturePoint text="Convenient location" />

              <FeaturePoint text="Flexible stay requirements" />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORPORATE BENEFITS
      ===================================================== */}
      <section className="bg-[#4A1D3F]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-2xl text-center text-white">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
              Corporate benefits
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Better for your team.
              <br />
              Easier for your business.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              A corporate accommodation experience designed
              around convenience and consistency.
            </p>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

            <BenefitCard
              icon={<CalendarCheck size={24} />}
              title="Flexible Stays"
              description="Accommodation options for short-term and longer business requirements."
            />

            <BenefitCard
              icon={<Wifi size={24} />}
              title="Stay Connected"
              description="Reliable Wi-Fi so employees can work comfortably during their stay."
            />

            <BenefitCard
              icon={<ShieldCheck size={24} />}
              title="Peace of Mind"
              description="A security-focused accommodation environment for business travelers."
            />

            <BenefitCard
              icon={<FileText size={24} />}
              title="Corporate Enquiries"
              description="Discuss your company's accommodation requirements directly with the team."
            />

            <BenefitCard
              icon={<Headphones size={24} />}
              title="Dedicated Support"
              description="Get assistance with your corporate accommodation requirements."
            />

            <BenefitCard
              icon={<MapPin size={24} />}
              title="Convenient Location"
              description="Stay within convenient reach of business areas and city facilities."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
            Simple process
          </p>

          <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
            Corporate booking,
            <br />
            made simple.
          </h2>

        </div>


        <div className="relative mt-16 grid gap-8 md:grid-cols-3">

          <ProcessCard
            number="01"
            title="Tell us what you need"
            text="Share your company, number of guests, dates, and accommodation requirements."
          />

          <ProcessCard
            number="02"
            title="Get your options"
            text="Our team can discuss suitable accommodation options based on your requirements."
          />

          <ProcessCard
            number="03"
            title="Confirm the stay"
            text="Once the details are finalized, confirm the booking and let your team focus on business."
          />

        </div>

      </section>


      {/* =====================================================
          BUSINESS FEATURES
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="rounded-[2rem] bg-white p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                  Built around convenience
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                  Give your team
                  <br />
                  a better stay.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[#756B6B]">
                  Business travel can already be demanding. Good
                  accommodation should make the experience easier,
                  not more complicated.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A1D3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5B274D]"
                >
                  Contact Corporate Team
                  <ArrowRight size={16} />
                </Link>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                <MiniCard
                  icon={<Wifi size={20} />}
                  title="Connectivity"
                  text="Reliable Wi-Fi"
                />

                <MiniCard
                  icon={<Coffee size={20} />}
                  title="Comfort"
                  text="Relax after work"
                />

                <MiniCard
                  icon={<Car size={20} />}
                  title="Convenience"
                  text="Easy access"
                />

                <MiniCard
                  icon={<ShieldCheck size={20} />}
                  title="Security"
                  text="Peace of mind"
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORPORATE ENQUIRY
      ===================================================== */}
      <section className="bg-[#FAF7F2]">

        <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="rounded-[2rem] bg-[#4A1D3F] p-8 text-center text-white sm:p-12 lg:p-16">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">

              <BriefcaseBusiness
                size={25}
                className="text-[#E4C98F]"
              />

            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
              Corporate enquiry
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Looking for accommodation
              <br />
              for your team?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
              Tell us about your company's requirements and our
              team can help you explore suitable accommodation
              options.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
              >
                Send Enquiry
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

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="border-t border-[#E8DED8] bg-white">

        <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Corporate FAQ
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Common questions.
            </h2>

          </div>


          <div className="mt-12 space-y-3">

            <FAQ
              question="Who can use the corporate stay service?"
              answer="Companies can use the service for employees, business travelers, teams, consultants, clients, and other visiting professionals."
            />

            <FAQ
              question="Can companies arrange stays for multiple employees?"
              answer="Yes. Companies can contact the corporate team to discuss accommodation requirements for multiple guests or team members."
            />

            <FAQ
              question="Can corporate stays be short-term?"
              answer="Yes. Corporate accommodation can be discussed for short business trips as well as longer assignments."
            />

            <FAQ
              question="How do I request a corporate booking?"
              answer="Use the Contact or Corporate Enquiry option and share your company, dates, number of guests, and accommodation requirements."
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
            Business stays made easier
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Let's make business
            <br />
            travel comfortable.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Talk to the TRS team about accommodation for your
            employees, clients, or business travelers.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="tel:+910000000000"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#4A1D3F]"
            >
              <Phone size={17} />
              Call Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   AUDIENCE CARD
========================================================= */

const AudienceCard = ({
  icon,
  number,
  title,
  text,
}) => {
  return (
    <div className="group rounded-2xl border border-[#DED2CA] bg-[#FAF7F2] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F] transition group-hover:bg-[#4A1D3F] group-hover:text-[#E4C98F]">
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
        {text}
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
        <Check
          size={14}
          strokeWidth={2.5}
        />
      </div>

      <span className="text-sm text-[#625A5A]">
        {text}
      </span>

    </div>
  );
};


/* =========================================================
   BENEFIT CARD
========================================================= */

const BenefitCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[#4A1D3F] p-8 text-white transition duration-300 hover:bg-[#542345]">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#E4C98F]">
        {icon}
      </div>

      <h3 className="mt-6 font-serif text-xl">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/50">
        {description}
      </p>

    </div>
  );
};


/* =========================================================
   PROCESS CARD
========================================================= */

const ProcessCard = ({
  number,
  title,
  text,
}) => {
  return (
    <div className="relative rounded-2xl border border-[#E8DED8] bg-white p-8">

      <span className="text-xs font-bold tracking-widest text-[#B08B4F]">
        {number}
      </span>

      <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F]">
        <Check size={19} />
      </div>

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
   MINI CARD
========================================================= */

const MiniCard = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="rounded-2xl bg-[#F2EBE5] p-6">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A1D3F]">
        {icon}
      </div>

      <h3 className="mt-5 font-medium text-[#4A1D3F]">
        {title}
      </h3>

      <p className="mt-1 text-xs text-[#756B6B]">
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

        <span>
          {question}
        </span>

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

export default CorporateStay;

