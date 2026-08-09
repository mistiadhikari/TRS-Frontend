
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Wifi,
  Coffee,
  Car,
  ShieldCheck,
  Utensils,
  Sparkles,
  BedDouble,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

const Hotels = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#292525]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[78vh] overflow-hidden">

        <img
          src="/images/hotel-hero.jpg"
          alt="TRS Hotels"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#291022]/65" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8 lg:pb-20">

          <div className="max-w-3xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <Star size={14} className="text-[#E4C98F]" />
              Comfortable Hotel Stays
            </div>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Stay well.
              <br />
              <span className="text-[#E4C98F]">
                Travel better.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Comfortable hotel stays designed for business trips,
              short visits, weekends away, and everything in between.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/booking"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F0DDAE]"
              >
                Book a Room

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
                Enquire Now
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
              TRS Hotels
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              A stay that feels
              <br />
              effortlessly right.
            </h2>

          </div>

          <div>

            <p className="text-base leading-8 text-[#756B6B]">
              TRS Hotels brings together comfortable rooms, thoughtful
              facilities, and convenient locations for travelers who
              value a smooth and comfortable stay.
            </p>

            <p className="mt-5 text-base leading-8 text-[#756B6B]">
              Whether you're visiting for work, exploring the city,
              or simply looking for a comfortable place to rest,
              our stays are designed around your needs.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOTEL STAY OPTIONS
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-2xl text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Find your stay
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Rooms made for
              <br />
              different journeys.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#756B6B]">
              Choose a stay based on your trip, space requirements,
              and comfort preferences.
            </p>

          </div>


          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            <RoomCard
              image="/images/hotel-standard.jpg"
              tag="Essential"
              title="Standard Room"
              description="A comfortable and practical room for short business trips and city visits."
              features={[
                "Comfortable bed",
                "Private bathroom",
                "Wi-Fi",
                "Housekeeping",
              ]}
            />

            <RoomCard
              image="/images/hotel-deluxe.jpg"
              tag="Popular"
              title="Deluxe Room"
              description="A little more space and comfort for travelers looking for an elevated stay."
              features={[
                "Spacious room",
                "Private bathroom",
                "Wi-Fi",
                "Housekeeping",
              ]}
            />

            <RoomCard
              image="/images/hotel-suite.jpg"
              tag="Premium"
              title="Suite"
              description="A premium stay designed for guests who want extra space and a more relaxed experience."
              features={[
                "Separate living space",
                "Premium comfort",
                "Wi-Fi",
                "Housekeeping",
              ]}
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED ROOM
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/hotel-room.jpg"
                alt="Comfortable hotel room"
                className="h-[540px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#4A1D3F] p-6 text-white shadow-xl sm:-right-8">

              <BedDouble
                size={22}
                className="text-[#E4C98F]"
              />

              <p className="mt-3 font-serif text-xl">
                Rest well.
              </p>

              <p className="mt-1 text-xs text-white/50">
                Wake up refreshed
              </p>

            </div>

          </div>


          {/* Content */}
          <div className="lg:pl-8">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Your room
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              Comfort is in
              <br />
              the details.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#756B6B]">
              From a comfortable place to rest to reliable connectivity
              and essential services, every part of your stay should
              feel simple and convenient.
            </p>

            <div className="mt-8 space-y-4">

              <FeaturePoint text="Comfortable sleeping arrangements" />

              <FeaturePoint text="Clean and well-maintained spaces" />

              <FeaturePoint text="Reliable Wi-Fi connectivity" />

              <FeaturePoint text="Housekeeping support" />

              <FeaturePoint text="Convenient access to essential services" />

            </div>

            <Link
              to="/booking"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#4A1D3F] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#5B274D]"
            >
              Check Availability
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          AMENITIES
      ===================================================== */}
      <section className="bg-[#4A1D3F]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-2xl text-center text-white">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
              Hotel amenities
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Everything you need
              <br />
              for a better stay.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Essential facilities designed to make your hotel
              experience comfortable and convenient.
            </p>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

            <AmenityCard
              icon={<Wifi size={24} />}
              title="High-Speed Wi-Fi"
              description="Stay connected with reliable internet access."
            />

            <AmenityCard
              icon={<Coffee size={24} />}
              title="Breakfast"
              description="Start your day with convenient breakfast options."
            />

            <AmenityCard
              icon={<Utensils size={24} />}
              title="Dining"
              description="Access to food and dining facilities during your stay."
            />

            <AmenityCard
              icon={<Sparkles size={24} />}
              title="Housekeeping"
              description="Clean and well-maintained rooms throughout your stay."
            />

            <AmenityCard
              icon={<ShieldCheck size={24} />}
              title="Security"
              description="A security-focused environment for peace of mind."
            />

            <AmenityCard
              icon={<Car size={24} />}
              title="Parking"
              description="Convenient parking facilities for guests."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY TRS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
            Why choose TRS
          </p>

          <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
            Simple. Comfortable.
            <br />
            Convenient.
          </h2>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <WhyCard
            number="01"
            title="Comfort"
            text="Spaces designed to help you relax, rest, and feel comfortable throughout your stay."
          />

          <WhyCard
            number="02"
            title="Convenience"
            text="Essential facilities and services brought together so your stay stays simple."
          />

          <WhyCard
            number="03"
            title="Location"
            text="Convenient access to workplaces, restaurants, shopping, and city attractions."
          />

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#4A1D3F] text-white">
                <MapPin size={22} className="text-[#E4C98F]" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Convenient location
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                Close to the city.
                <br />
                Easy to reach.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#756B6B]">
                Stay connected to the places that matter, whether
                you're visiting for work, business, leisure, or
                exploring the city.
              </p>

              <Link
                to="/attractions"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A1D3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5B274D]"
              >
                Explore Nearby
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="flex min-h-[380px] items-center justify-center rounded-[2rem] bg-[#E7DCD4]">

              <div className="text-center">

                <MapPin
                  size={42}
                  className="mx-auto text-[#4A1D3F]"
                />

                <h3 className="mt-5 font-serif text-2xl text-[#4A1D3F]">
                  TRS Hotels
                </h3>

                <p className="mt-2 text-sm text-[#756B6B]">
                  Bangalore, India
                </p>

                <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-[#756B6B]">
                  Add your Google Maps integration here once the
                  exact hotel location is finalized.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BUSINESS TRAVEL
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="rounded-[2rem] bg-[#F2EBE5] p-8 sm:p-12 lg:p-16">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Business stays
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                Work trips made
                <br />
                more comfortable.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#756B6B]">
                Traveling for work? TRS Hotels provides a comfortable
                base where you can rest, stay connected, and get
                ready for your next meeting.
              </p>

              <Link
                to="/corporate-stay"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#4A1D3F] px-6 py-3 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#4A1D3F] hover:text-white"
              >
                Corporate Stay
                <ArrowUpRight size={16} />
              </Link>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <MiniFeature
                icon={<Wifi size={20} />}
                title="Stay Connected"
                text="Reliable Wi-Fi"
              />

              <MiniFeature
                icon={<Clock size={20} />}
                title="Flexible"
                text="Convenient stays"
              />

              <MiniFeature
                icon={<Coffee size={20} />}
                title="Recharge"
                text="Comfortable spaces"
              />

              <MiniFeature
                icon={<MapPin size={20} />}
                title="Accessible"
                text="Convenient location"
              />

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
              Questions
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Frequently asked.
            </h2>

          </div>


          <div className="mt-12 space-y-3">

            <FAQ
              question="What types of rooms are available?"
              answer="TRS can offer different room categories such as Standard Rooms, Deluxe Rooms, and Suites. Final room categories can be updated according to your actual hotel inventory."
            />

            <FAQ
              question="Can I book a room online?"
              answer="Yes. The Book a Room button can take guests to your booking page where they can submit their stay requirements."
            />

            <FAQ
              question="Do the rooms have Wi-Fi?"
              answer="Yes. Wi-Fi is included as one of the key hotel facilities."
            />

            <FAQ
              question="Are business stays available?"
              answer="Yes. TRS Hotels can support business and corporate stays. Use the Corporate Stay page for business enquiries."
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
            Your next stay
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Make your stay
            <br />
            worth remembering.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Find your room, choose your dates, and get ready for
            a comfortable stay with TRS.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/booking"
              className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
            >
              Book Your Room
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
   ROOM CARD
========================================================= */

const RoomCard = ({
  image,
  tag,
  title,
  description,
  features,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 rounded-full bg-[#4A1D3F] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#E4C98F]">
          {tag}
        </div>

      </div>


      {/* Content */}
      <div className="p-7">

        <div className="flex items-start justify-between gap-4">

          <h3 className="font-serif text-2xl text-[#4A1D3F]">
            {title}
          </h3>

          <BedDouble
            size={20}
            className="mt-1 shrink-0 text-[#B08B4F]"
          />

        </div>

        <p className="mt-3 text-sm leading-7 text-[#756B6B]">
          {description}
        </p>

        <div className="mt-5 space-y-2.5">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs text-[#756B6B]"
            >
              <Check
                size={14}
                className="text-[#B08B4F]"
              />

              {feature}
            </div>
          ))}

        </div>

        <Link
          to="/booking"
          className="mt-7 flex items-center justify-center gap-2 rounded-full border border-[#4A1D3F] px-5 py-3 text-xs font-semibold text-[#4A1D3F] transition hover:bg-[#4A1D3F] hover:text-white"
        >
          Book This Room
          <ArrowUpRight size={14} />
        </Link>

      </div>

    </article>
  );
};


/* =========================================================
   AMENITY CARD
========================================================= */

const AmenityCard = ({
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
   WHY CARD
========================================================= */

const WhyCard = ({
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
   MINI FEATURE
========================================================= */

const MiniFeature = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="rounded-2xl bg-white p-6">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E5DD] text-[#4A1D3F]">
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

export default Hotels;

