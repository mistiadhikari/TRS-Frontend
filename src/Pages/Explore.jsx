
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Compass,
  Camera,
  Utensils,
  ShoppingBag,
  Landmark,
  Trees,
  Music,
  Clock,
  Car,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#292525]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[78vh] overflow-hidden">

        <img
          src="/images/explore-hero.jpg"
          alt="Explore the city"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#291022]/65" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 pt-24 lg:px-8 lg:pb-20">

          <div className="max-w-3xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md">
              <Compass
                size={14}
                className="text-[#E4C98F]"
              />
              Explore & Experience
            </div>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Go beyond
              <br />
              <span className="text-[#E4C98F]">
                your stay.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Discover the places, experiences, food, culture, and
              hidden gems waiting to be explored around you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#discover"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition duration-300 hover:bg-[#F0DDAE]"
              >
                Start Exploring

                <ArrowRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/hotels"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#4A1D3F]"
              >
                Stay With Us
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section
        id="discover"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
      >

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Discover more
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
              Your stay is only
              <br />
              the beginning.
            </h2>

          </div>

          <div>

            <p className="text-base leading-8 text-[#756B6B]">
              A great trip isn't just about where you stay. It's
              about what you discover once you step outside.
            </p>

            <p className="mt-5 text-base leading-8 text-[#756B6B]">
              Explore local attractions, experience the city's
              culture, find great places to eat, shop, relax,
              and create memories along the way.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY CARDS
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="mx-auto max-w-2xl text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Explore your way
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Find something
              <br />
              worth discovering.
            </h2>

          </div>


          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryCard
              icon={<Landmark size={25} />}
              image="/images/explore-attractions.jpg"
              title="Attractions"
              description="Discover landmarks, iconic places, and must-see destinations."
            />

            <CategoryCard
              icon={<Utensils size={25} />}
              image="/images/explore-food.jpg"
              title="Food & Dining"
              description="Find local flavours, restaurants, cafés, and memorable meals."
            />

            <CategoryCard
              icon={<ShoppingBag size={25} />}
              image="/images/explore-shopping.jpg"
              title="Shopping"
              description="Explore markets, shopping streets, boutiques, and local finds."
            />

            <CategoryCard
              icon={<Trees size={25} />}
              image="/images/explore-nature.jpg"
              title="Nature & Leisure"
              description="Slow down with parks, open spaces, walks, and relaxing experiences."
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED DESTINATIONS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
              Featured places
            </p>

            <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
              Places to put
              <br />
              on your list.
            </h2>

          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-[#756B6B]">
              Explore some of the places and experiences that
              can make your trip more memorable.
            </p>
          </div>

        </div>


        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          <PlaceCard
            image="/images/place-1.jpg"
            category="Culture"
            title="Historic Landmarks"
            location="Explore the city"
            description="Step into the history and architecture that helped shape the destination."
          />

          <PlaceCard
            image="/images/place-2.jpg"
            category="Leisure"
            title="Local Experiences"
            location="Around the city"
            description="Experience the everyday culture, lifestyle, and character of the destination."
          />

          <PlaceCard
            image="/images/place-3.jpg"
            category="Nature"
            title="Green Escapes"
            location="Nearby"
            description="Take a break from the city's pace and discover peaceful outdoor spaces."
          />

        </div>

      </section>


      {/* =====================================================
          LOCAL EXPERIENCE
      ===================================================== */}
      <section className="bg-[#4A1D3F]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="text-white">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4C98F]">
                Local experiences
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Don't just visit.
                <br />
                Experience the place.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                The best memories often come from simple moments:
                trying something local, walking through a new
                neighbourhood, discovering a hidden café, or
                watching the city come alive.
              </p>

              <div className="mt-9 space-y-4">

                <ExperiencePoint
                  icon={<Camera size={19} />}
                  title="Capture the moment"
                  text="Find beautiful places and memorable views."
                />

                <ExperiencePoint
                  icon={<Utensils size={19} />}
                  title="Taste something local"
                  text="Discover flavours and food experiences."
                />

                <ExperiencePoint
                  icon={<Music size={19} />}
                  title="Feel the culture"
                  text="Experience local art, music, and traditions."
                />

              </div>

            </div>


            <div className="relative">

              <div className="overflow-hidden rounded-[2rem]">

                <img
                  src="/images/local-experience.jpg"
                  alt="Local experience"
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-6 shadow-xl sm:-left-8">

                <div className="flex items-center gap-2">

                  <Star
                    size={17}
                    className="fill-[#E4C98F] text-[#B08B4F]"
                  />

                  <span className="text-sm font-semibold text-[#4A1D3F]">
                    Make it memorable
                  </span>

                </div>

                <p className="mt-2 text-xs text-[#756B6B]">
                  Discover more than a hotel room.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DAY PLANNER
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
            Plan your day
          </p>

          <h2 className="font-serif text-4xl text-[#4A1D3F] sm:text-5xl">
            One day.
            <br />
            Plenty to discover.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#756B6B]">
            A simple example of how you could spend a day exploring
            the city around your stay.
          </p>

        </div>


        <div className="mt-16 grid gap-5 md:grid-cols-4">

          <DayCard
            time="08:00 AM"
            title="Start Slow"
            text="Begin your morning with breakfast and a relaxed start."
          />

          <DayCard
            time="10:00 AM"
            title="Explore"
            text="Visit a landmark, museum, market, or local attraction."
          />

          <DayCard
            time="02:00 PM"
            title="Taste Local"
            text="Take a break and discover a local restaurant or café."
          />

          <DayCard
            time="06:00 PM"
            title="Unwind"
            text="Enjoy an evening experience before returning to your stay."
          />

        </div>

      </section>


      {/* =====================================================
          QUICK GUIDE
      ===================================================== */}
      <section className="border-y border-[#E8DED8] bg-[#F2EBE5]">

        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B08B4F]">
                Local guide
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4A1D3F] sm:text-5xl">
                Need help deciding
                <br />
                where to go?
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#756B6B]">
                Our team can help you discover nearby places and
                point you towards experiences that fit your time,
                interests, and travel style.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4A1D3F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5B274D]"
              >
                Ask Our Team
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <GuideCard
                icon={<MapPin size={20} />}
                title="Nearby"
                text="Find places close to your stay."
              />

              <GuideCard
                icon={<Clock size={20} />}
                title="Time"
                text="Choose experiences based on your schedule."
              />

              <GuideCard
                icon={<Car size={20} />}
                title="Getting Around"
                text="Plan how you'll reach your destination."
              />

              <GuideCard
                icon={<Compass size={20} />}
                title="Discover"
                text="Find something beyond the usual tourist spots."
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#291022] px-5 py-24 text-center lg:px-8 lg:py-32">

        <div className="mx-auto max-w-3xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E4C98F]">
            Your journey starts here
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            Stay.
            <br />
            Explore.
            <br />
            Remember.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Make your next trip more than just a stay. Discover
            the places and experiences waiting outside your door.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/hotels"
              className="flex items-center justify-center gap-2 rounded-full bg-[#E4C98F] px-7 py-3.5 text-sm font-semibold text-[#4A1D3F] transition hover:bg-[#F0DDAE]"
            >
              Find a Stay
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#4A1D3F]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =========================================================
   CATEGORY CARD
========================================================= */

const CategoryCard = ({
  icon,
  image,
  title,
  description,
}) => {
  return (
    <Link
      to="#"
      className="group relative h-[400px] overflow-hidden rounded-2xl"
    >

      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#291022] via-[#291022]/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#E4C98F] backdrop-blur-md">
          {icon}
        </div>

        <h3 className="mt-5 font-serif text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/60">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#E4C98F]">
          Explore
          <ArrowRight
            size={14}
            className="transition group-hover:translate-x-1"
          />
        </div>

      </div>

    </Link>
  );
};


/* =========================================================
   PLACE CARD
========================================================= */

const PlaceCard = ({
  image,
  category,
  title,
  location,
  description,
}) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-72 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 rounded-full bg-[#4A1D3F] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#E4C98F]">
          {category}
        </div>

      </div>

      <div className="p-7">

        <div className="flex items-center gap-2 text-xs text-[#B08B4F]">
          <MapPin size={13} />
          {location}
        </div>

        <h3 className="mt-3 font-serif text-2xl text-[#4A1D3F]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#756B6B]">
          {description}
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#4A1D3F]"
        >
          Discover More
          <ArrowRight
            size={14}
            className="transition group-hover:translate-x-1"
          />
        </button>

      </div>

    </article>
  );
};


/* =========================================================
   EXPERIENCE POINT
========================================================= */

const ExperiencePoint = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="flex gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E4C98F]">
        {icon}
      </div>

      <div>

        <h3 className="font-medium text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-white/45">
          {text}
        </p>

      </div>

    </div>
  );
};


/* =========================================================
   DAY CARD
========================================================= */

const DayCard = ({
  time,
  title,
  text,
}) => {
  return (
    <div className="rounded-2xl border border-[#E8DED8] bg-white p-7">

      <span className="text-xs font-bold tracking-widest text-[#B08B4F]">
        {time}
      </span>

      <h3 className="mt-6 font-serif text-2xl text-[#4A1D3F]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#756B6B]">
        {text}
      </p>

    </div>
  );
};


/* =========================================================
   GUIDE CARD
========================================================= */

const GuideCard = ({
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

      <p className="mt-1 text-xs leading-5 text-[#756B6B]">
        {text}
      </p>

    </div>
  );
};

export default Explore;

